import FormState from './form.js';

const formElements = document.querySelectorAll('.ad-form, .map__filters');
formElements.forEach((form) => new FormState(form).disabled());
const TokioCoordinate = {
  lat: 35.6895,
  lng: 139.692,
};
const addressInput = document.querySelector('#address');
addressInput.value = Object.values(TokioCoordinate).join();

const map = L.map('map-canvas')
  .on('load', () => {
    formElements.forEach((form) => new FormState(form).active());
  })
  .setView(
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

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const marker = L.marker(
  {
    lat: TokioCoordinate.lat,
    lng: TokioCoordinate.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

marker.addTo(map);
marker.on('moveend', (evt) => {
  const currentCoordinate = evt.target.getLatLng();

  addressInput.value = Object.values(currentCoordinate)
    .map((el) => el.toFixed(5))
    .join();
});
