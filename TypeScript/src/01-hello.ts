const names = ['Romain', 'Jean', 'Eric'];

function hello(name: string) {
  return `Hello ${name.toUpperCase()} !`;
}

for (const n of names) {
  console.log(hello(n));
}

// hello(123);

