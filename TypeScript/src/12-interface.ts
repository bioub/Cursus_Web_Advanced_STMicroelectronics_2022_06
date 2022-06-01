interface IHello {
  hello(): string;
}

interface IGoodbye {
  goodbye(): string;
}

class ContactWithInterface implements IHello, IGoodbye {
  goodbye(): string {
    throw new Error("Method not implemented.");
  }
  hello(): string {
    throw new Error("Method not implemented.");
  }
}

interface Coords {
  x: number;
  y: number;
}

function useCoords(coords: Coords) {

}

useCoords({ x: 1, y: 2 });

// Interface anonyme
function useCoords2d(coords: {x: number; y: number}) {

}

// Alternative avec alias
type Coords3d = {x: number; y: number; z: number};

function useCoords3d(coords: Coords3d) {

}


