import { Component } from 'react';

type Props = {
  readonly items: string[];
};
type State = {
  readonly value: string;
};

class ExMultiStateButton extends Component<Props, State> {
  state: State = {
    value: this.props.items[0] ?? '',
  };
  handleClick = () => {
    const { value } = this.state;
    const { items } = this.props;
    const index = items.indexOf(value);

    this.setState({
      value: items[(index + 1) % items.length],
    });
  }
  render() {
    const { value } = this.state;
    return (
      <button className="ExMultiStateButton" onClick={this.handleClick}>
        {value}
      </button>
    );
  }
}

export default ExMultiStateButton;

// Exercice 2
// Au chargement du composant afficher dans le bouton
// le premier élément du tableau
// Au clic du bouton afficher l'élément suivant
// repartir du début du tableau si besoin
