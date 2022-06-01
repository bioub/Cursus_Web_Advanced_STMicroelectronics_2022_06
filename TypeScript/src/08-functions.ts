function hello2(name: string): string {
  return `Hello ${name.toUpperCase()} !`;
}

type callback = (val: string) => void;

function useCallback(cb: callback) {
  cb('123')
}

useCallback(() => {});

// hello2(); // param est obligatoire (contrairement à ECMAScript)
