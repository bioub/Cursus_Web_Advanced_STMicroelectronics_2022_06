type Props = {
  readonly items: string[];
  readonly value: string;
  onSelection(val: string): void;
};

function ExButtonGroup({ items, value, onSelection }: Props) {
  return (
    <div className="ExButtonGroup">
      {items.map((item, index) => (
        <button
          disabled={item === value}
          key={index}
          onClick={() => onSelection(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default ExButtonGroup;

// Exercice 3 : ButtonGroup
// Similaire à MultiStateButton mais il faut afficher un bouton pour chaque valeur
// La bouton contenant la valeur sélectionnée devra être disabled = true
// <div className="ExButtonGroup"> <button>1</button> <button disabled={true}>1</button> </div>
