function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

const numbers = Array(getRandomInt(10)).fill(null).map(() => {
  const num = getRandomInt(1000) + 1;
  return num.toString().padStart(4, "0");
});

console.log(numbers);
