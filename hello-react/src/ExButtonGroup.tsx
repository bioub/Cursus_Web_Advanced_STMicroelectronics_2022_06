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
      <div className="ExButtonGroup">

      </div>
    );
  }
}

export default ExButtonGroup;

// Exercice 3 : ButtonGroup
// Similaire à MultiStateButton mais il faut afficher un bouton pour chaque valeur
// La bouton contenant la valeur sélectionnée devra être disabled = true
// <div className="ExButtonGroup"> <button>1</button> <button disabled={true}>1</button> </div>
