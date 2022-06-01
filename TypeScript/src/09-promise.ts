function timeout(delayMs: number): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delayMs);
  });
}

function timeout2(delayMs: number) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delayMs);
  });
}

async function copy(): Promise<number> {
  return 123;
}
