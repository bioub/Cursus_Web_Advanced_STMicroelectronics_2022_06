// const formEl = <HTMLFormElement> document.querySelector('.todos-form');

const formEl = document.querySelector('.todos-form') as HTMLFormElement;

if (formEl.method === 'GET') {

}

const formEl4 = document.querySelector<HTMLFormElement>('.todos-form')!;

if (formEl4.method === 'GET') {

}
