import { render, fireEvent, screen } from "@testing-library/react";
import LikeButtonControlled from "./LikeButtonControlled";

test('renders', () => {
  render(<LikeButtonControlled count={0} onIncrement={() => {}} />)
});

test('click calls onIncrement', () => {
  const spy = jest.fn();
  render(<LikeButtonControlled count={0} onIncrement={spy} />)
  fireEvent.click(screen.getByRole('button'));
  expect(spy).toHaveBeenCalledWith(1);
});
