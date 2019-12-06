
export function test() {
  return new Promise(resolve => {
    resolve('test');
  })
};

export function randomRange(min, max) {
  return Math.random() * (max - min) + min;
};
