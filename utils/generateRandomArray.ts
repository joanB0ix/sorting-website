export function generateRandomInt32Array(
  length: number,
  min: number = 0,
  max: number = 1000
): Int32Array {
  const array = new Int32Array(length);
  for (let i = 0; i < length; i++) {
    array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return array;
}
