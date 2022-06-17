import { Component } from 'react';

type Props = {
  readonly items: string[];
};
type State = {
  readonly value: string;
};

class ExButtonGroup extends Component<Props, State> {
  state: State = {
    value: this.props.items[0] ?? '',
  };
  render() {
    const { value } = this.state;
    return (
      <button className="ExButtonGroup">

      </button>
    );
  }
}

export default ExButtonGroup;

// Exercice 3 : ButtonGroup
// Similaire à MultiStateButton mais il faut afficher un bouton pour chaque valeur
// La bouton contenant la valeur sélectionnée devra être disabled = true
