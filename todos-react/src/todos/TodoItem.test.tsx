import { render, screen } from '@testing-library/react';
import { Todo } from './Todo';
import TodoItem from './TodoItem';

test('renders', () => {
  const todo: Todo = { _id: 'abcd', title: 'ABC', completed: true };
  render(<TodoItem todo={todo} />);
});

test('renders todo', () => {
  const todo: Todo = { _id: 'abcd', title: 'ABC', completed: true };
  render(<TodoItem todo={todo} />);
  expect(screen.getByText('ABC')).toBeInTheDocument();

  const checkboxEl = screen.getByRole<HTMLInputElement>('checkbox');
  expect(checkboxEl.checked).toBeTruthy();
});

test('renders todo with other values', () => {
  const todo: Todo = { _id: 'abcd', title: 'DEF', completed: false };
  render(<TodoItem todo={todo} />);
  expect(screen.getByText('DEF')).toBeInTheDocument();

  const checkboxEl = screen.getByRole<HTMLInputElement>('checkbox');
  expect(checkboxEl.checked).toBeFalsy();
});
