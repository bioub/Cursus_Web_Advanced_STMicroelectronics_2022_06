const names: string[] = [];

names.push('Romain');
names.push('Jean');
// names.push(true);

function hello(name: string) {
  return `Hello ${name.toUpperCase()} !`;
}

for (const n of names) {
  console.log(hello(n));
}

// hello(123);