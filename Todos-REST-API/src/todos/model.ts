import { Todo } from './interfaces';

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
    },
  ];

  static nextId() {
    // 23, 10, 5, 45, 7
    // maxId: 0, id: 23 => 23
    // maxId: 23, id: 10 => 23
    // maxId: 23, id: 5 => 23
    // maxId: 23, id: 45 => 45
    // maxId: 45, id: 7 => 45

    const maxId = this.todos.reduce(
      (maxId, t) => ((t.id ?? 0) > maxId ? t.id ?? 0 : maxId),
      0,
    );

    return maxId + 1;
  }

  static async find() {
    return this.todos;
  }

  static async findById(id: string) {
    const idNb = Number(id);

    return this.todos.find((t) => t.id === idNb);
  }

  static async create(todo: Todo) {
    const copy = {
      id: this.nextId(),
      ...todo,
    };

    this.todos.push(copy);

    return copy;
  }

  static async findByIdAndReplace(id: string, todo: Todo) {
    const idNb = Number(id);

    const copy = {
      ...todo,
    };

    // we force the id with the one from url
    copy.id = idNb;

    const existingIndex = this.todos.findIndex((t) => t.id === idNb);

    // no existing todo
    if (existingIndex === -1) {
      return null;
    }

    this.todos[existingIndex] = copy;

    return copy;
  }

  static async findByIdAndUpdate(id: string, todo: Todo) {
    const copy = {
      ...todo,
    };
    delete copy.id;

    const existingTodo: any = await this.findById(id);

    if (!existingTodo) {
      return null;
    }

    for (const [key, value] of Object.entries(copy)) {
      existingTodo[key] = value;
    }

    return existingTodo;
  }

  static async findByIdAndDelete(id: string) {
    const existingTodo: any = await this.findById(id);
    const index = this.todos.indexOf(existingTodo);

    this.todos.splice(index, 1);

    return existingTodo;
  }
}

export default Model;
