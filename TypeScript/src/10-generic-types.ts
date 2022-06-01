// function timeout2(delayMs: number) {
//   return new Promise<void>((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, delayMs);
//   });
// }

const formEl2 = document.querySelector<HTMLFormElement>('.todos-form');

if (formEl2?.method === 'GET') {

}

// Type Assertion :
// const nodeList = document.querySelectorAll('.todo-completed') as NodeListOf<HTMLInputElement>;

// for (const node of nodeList) {
//   node.checked
// }

const nodeList = document.querySelectorAll<HTMLInputElement>('.todo-completed');

for (const node of nodeList) {
  node.checked
}


// function identity<T>(val: T) {
//   return val;
// }

// identity<string>('123').toUpperCase();

function identity<Type = string>(val: Type) {
  return val;
}

identity('123').toUpperCase();

class Stack<T = string> {
  private data: T[] = [];
  push(val: T) {
    this.data.push(val);
  }
  pop(): T | undefined {
    return this.data.pop();
  }
  peek(): T {
    return this.data[this.data.length - 1];
  }
}

const strStack = new Stack();
strStack.push('html');
strStack.push('body');
strStack.push('h1');
console.log(strStack.peek().toUpperCase()); // H1
console.log(strStack.pop()?.toUpperCase()); // H1
console.log(strStack.peek().toUpperCase()); // BODY
