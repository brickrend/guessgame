const RandomNum = (min, max) => {
  const trueNumber = Math.floor(Math.random(min, max) * 100);
  return trueNumber;
};
export default RandomNum;
