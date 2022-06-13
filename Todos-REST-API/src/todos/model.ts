import { Todo } from "./interfaces";

class Model {
  private static todos: Todo[] = [
    {
      id: 1,
      title: 'Acheter du pain',
      completed: false,
    },
    {
      id: 2,
      title: 'Introduire Express',
      completed: true,
    }
  ];

  static async find() {
    return this.todos;
  }

}

export default Model;
