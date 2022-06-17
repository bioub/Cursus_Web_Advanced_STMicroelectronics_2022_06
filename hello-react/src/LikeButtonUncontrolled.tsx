import { Component } from 'react';

type Props = {};
type State = {
  readonly count: number;
};

class LikeButtonUncontrolled extends Component<Props, State> {
  state: State = {
    count: 0,
  };
  handleClick = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  };
  render() {
    const { count } = this.state;
    return (
      <button className="LikeButtonUncontrolled" onClick={this.handleClick}>
        {count}
      </button>
    );
  }
}

// const buttonEl = document.querySelector('.LikeButtonUncontrolled');
// buttonEl.addEventListener('click', (event) => {
//   event.currentTarget
//   event.target
//   this.setState({count: oldCount + 1})
// });

export default LikeButtonUncontrolled;
