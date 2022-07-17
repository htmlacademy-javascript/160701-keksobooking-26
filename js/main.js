const getRandomInteger = (min, max) => {
  const minIsPositive = Math.sign(min) === 1 || Math.sign(min) === 0;
  const maxIsPositive = Math.sign(max) === 1 || Math.sign(max) === 0;

  if (!(minIsPositive && maxIsPositive)) {
    throw new Error('Диапазон может быть только положительный, включая ноль');
  }
  if (min >= max || min === max) {
    throw new Error('Значение «до» меньшее, чем значение «от», или равное ему');
  }

  return Math.floor(Math.random() * (max - min) + min);
};
getRandomInteger(0, 7);

const getRandomFloat = (min, max, fixNumberSigns) => {
  const minIsPositive = Math.sign(min) === 1 || Math.sign(min) === 0;
  const maxIsPositive = Math.sign(max) === 1 || Math.sign(max) === 0;

  if (!(minIsPositive && maxIsPositive)) {
    throw new Error('Диапазон может быть только положительный, включая ноль');
  }
  if (min >= max || min === max) {
    throw new Error('Значение «до» меньшее, чем значение «от», или равное ему');
  }
  return (Math.random() * (max - min) + min).toFixed(fixNumberSigns);
};

getRandomFloat(1.1, 1.5, 2);
