export default (min = 1, max = 100) => {
  const number = Math.floor(Math.random() * max);
  if (number < min) {
    return min;
  }
  return number;
};
