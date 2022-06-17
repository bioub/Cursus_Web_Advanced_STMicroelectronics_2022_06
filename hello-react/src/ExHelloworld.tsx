import { Component, SyntheticEvent } from 'react';

type Props = {};
type State = {
  readonly name: string;
};

class ExHelloworld extends Component<Props, State> {
  state: State = {
    name: 'Romain',
  };
  handleInput = (event: SyntheticEvent<HTMLInputElement, InputEvent>) => {
    this.setState({
      name: event.currentTarget.value,
    });
  };
  render() {
    const { name } = this.state;
    return (
      <div className="ExHelloworld">
        <div>
          Name : <input onInput={this.handleInput} value={name} />
        </div>
        <p>
          Hello <span>{name}</span> !
        </p>
      </div>
    );
  }
}

export default ExHelloworld;

// Exercice 1
// Créer une propriété name sur le state avec une valeur par défaut
// L'afficher dans la balise span
// A la saisi dans le champ (methode handleInput)
// modifier la valeur de name du state
// (pour récupérer la valeur du champ utiliser event.currentTarget.value)
// Le composant se raffraichira tout seul
