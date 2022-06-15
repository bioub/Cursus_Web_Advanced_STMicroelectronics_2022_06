export function thatReturnPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('ABC');
    }, 10_000);
  });
}
