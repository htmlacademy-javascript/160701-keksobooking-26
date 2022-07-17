const getRandomInteger = (min, max) => {
  const minIsPositive = min >= 0;
  const maxIsPositive = max >= 0;

  if (!(minIsPositive && maxIsPositive)) {
    throw new Error('Диапазон может быть только положительный, включая ноль');
  }
  if (min >= max || min === max) {
    throw new Error('Значение «до» меньшее, чем значение «от», или равное ему');
  }

  return Math.floor(Math.random() * (max - min) + min);
};
getRandomInteger(0, 7);

const getRandomFloat = (min, max, fixNumberSigns = 2) => {
  const minIsPositive = min >= 0;
  const maxIsPositive = max >= 0;

  if (!(minIsPositive && maxIsPositive)) {
    throw new Error('Диапазон может быть только положительный, включая ноль');
  }
  if (min >= max || min === max) {
    throw new Error('Значение «до» меньшее, чем значение «от», или равное ему');
  }
  return (Math.random() * (max - min) + min).toFixed(fixNumberSigns);
};

getRandomFloat(1.1, 1.5, 2);
