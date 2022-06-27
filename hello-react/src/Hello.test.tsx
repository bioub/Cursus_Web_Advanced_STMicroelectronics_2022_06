// import { unmountComponentAtNode } from 'react-dom';
// import { createRoot, Root } from 'react-dom/client';
// import { act, createRenderer } from 'react-dom/test-utils';
// import Hello from './Hello';

// let divEl: HTMLDivElement;
// let root: Root;

// beforeEach(() => {
//   divEl = document.createElement('div');
//   document.body.appendChild(divEl);
//   root = createRoot(divEl);
// });

// afterEach(() => {
//   root.unmount();
//   divEl.remove();
// });

// test('renders', () => {
//   root.render(<Hello />);
// });

// test('renders name', () => {
//   // act(() => {
//     const { render } = createRenderer()
//     render(<Hello name="Romain" />);
//   // });
//   // attention à l'environnement émulé (ici .innerText échoue)
//   expect(divEl.querySelector('span')?.textContent).toBe('Romain')
// });

// test('snapshot', () => {
//   act(() => {
//     root.render(<Hello name="Romain" />);
//   });
//   //expect(divEl.innerHTML).toMatchInlineSnapshot(`"<div class=\\"Hello\\" title=\\"Bonjour\\">Hello <span>Romain</span></div>"`);
// })

import { render, screen } from '@testing-library/react';
import Hello from './Hello';

test('renders', () => {
  render(<Hello />);
});

test('renders name', () => {
  render(<Hello name="Romain" />);
  const element = screen.getByText(/romain/i);
  expect(element).toBeInTheDocument();
});
