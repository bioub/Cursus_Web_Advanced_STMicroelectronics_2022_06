type Props = {
  readonly count: number;
  onIncrement(val: number): void;
};

function LikeButtonControlled({ count, onIncrement }: Props) {
  function handleClick() {
    onIncrement(count + 1);
  }
  return (
    <button className="LikeButtonControlled" onClick={handleClick}>
      {count}
    </button>
  );
}

export default LikeButtonControlled;
