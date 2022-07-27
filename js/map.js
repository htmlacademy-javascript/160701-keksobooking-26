import FormState from './form.js';
import { generateCard } from './generate.js';
import { OFFERS_LENGTH } from './data.js';
import { getPoints } from './backend.js';

const adForm = new FormState(document.querySelector('.ad-form'));
adForm.disabled();
const filtersForm = new FormState(document.querySelector('.map__filters'));
filtersForm.disabled();

const TokioCoordinate = {
  lat: 35.6895,
  lng: 139.692,
};
const addressInput = document.querySelector('#address');
addressInput.value = Object.values(TokioCoordinate).join();

const map = L.map('map-canvas');
const PinIcons = {
  MAIN: L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  }),
  DEFAULT: L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  }),
};
const markerGroup = L.layerGroup().addTo(map);
const createMarker = (point) => {
  const {
    location: { lat, lng },
  } = point;
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon: PinIcons.DEFAULT,
    },
  );

  marker.addTo(markerGroup).bindPopup(generateCard(point));
};
map.on('load', async () => {
  adForm.active();

  const points = await getPoints();

  if (points.length) {
    points.filter((el, i) => i <= OFFERS_LENGTH).forEach(createMarker);
    filtersForm.active();
  }
});

map.setView(
  {
    lat: TokioCoordinate.lat,
    lng: TokioCoordinate.lng,
  },
  10,
);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
const mainMarker = L.marker(
  {
    lat: TokioCoordinate.lat,
    lng: TokioCoordinate.lng,
  },
  {
    draggable: true,
    icon: PinIcons.MAIN,
  },
);

mainMarker.addTo(map);
mainMarker.on('moveend', ({ target }) => {
  const currentCoordinate = target.getLatLng();

  addressInput.value = Object.values(currentCoordinate)
    .map((el) => el.toFixed(5))
    .join();
});
