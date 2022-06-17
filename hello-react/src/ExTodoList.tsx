import { Component } from 'react';

type Props = {

};
type State = {
  readonly items: string[];
};

class ExTodoList extends Component<Props, State> {
  state: State = {
    items: [
      'Value 1',
      'Value 2',
      'Value 3',
    ],
  };
  render() {
    const { items } = this.state;
    return (
      <div className="ExTodoList">
        <form>
          <input />
          <button>+</button>
        </form>
        <div>

        </div>
      </div>
    );
  }
}

export default ExTodoList;

// Exercice 4 : TodoList
// Afficher le tableau d'items dans la balise div (un ensemble de balise div)
// Au submit du form ajouter un élément au tableau
// (pensez à event.preventDefault())
