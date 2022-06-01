enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

function setColor(color: Color) {
  switch (color) {
    case Color.Blue:
      console.log('blue');
  }
}

setColor(Color.Red);
