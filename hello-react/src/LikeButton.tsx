import { Component } from 'react';

type Props = {};
type State = {
  readonly count: number;
};

class LikeButton extends Component<Props, State> {
  state: State = {
    count: 0,
  };
  handleClick = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  }
  render() {
    const { count } = this.state;
    return <button className="LikeButton" onClick={this.handleClick}>{count}</button>;
  }
}

// const buttonEl = document.querySelector('.LikeButton');
// buttonEl.addEventListener('click', (event) => {
//   event.currentTarget
//   event.target
//   this.setState({count: oldCount + 1})
// });

export default LikeButton;
