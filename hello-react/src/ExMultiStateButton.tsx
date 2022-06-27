import { Component } from 'react';

type Props = {
  readonly items: string[];
  readonly value: string;
  onSelection(val: string): void;
};

function ExMultiStateButton({ items, value, onSelection }: Props) {
  function handleClick() {
    const index = items.indexOf(value);
    onSelection(items[(index + 1) % items.length]);
  }
  return (
    <button className="ExMultiStateButton" onClick={handleClick}>
      {value}
    </button>
  );
}

export default ExMultiStateButton;

// Exercice 2
// Au chargement du composant afficher dans le bouton
// le premier élément du tableau
// Au clic du bouton afficher l'élément suivant
// repartir du début du tableau si besoin
