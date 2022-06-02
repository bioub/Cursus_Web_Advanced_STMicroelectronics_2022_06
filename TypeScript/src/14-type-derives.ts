// Union de type
type booleanOrString = boolean | string;

type withKeyA = {
  a: string;
};

type withKeyB = {
  b: string;
};

type withKeyABC = {
  a: string;
  b: string;
  c: string;
};

type withKeysAandB = withKeyA | withKeyB;

type interKeys = withKeyABC | withKeysAandB;

// const maVar: interKeys = {

// }

// Utility Type
// https://www.typescriptlang.org/docs/handbook/utility-types.html#handbook-content

const maVarPartial: Partial<withKeyABC> = {

};

// un type peut être un string ou number determiné
type directions = 'left' | 'right';

const maVar3: directions = 'left';

const lastName = 'Dupont';



const coords = {
  x: 1,
  y: 2,
};


const coords2: typeof coords = {
  x: 1,
  y: 2,
};
