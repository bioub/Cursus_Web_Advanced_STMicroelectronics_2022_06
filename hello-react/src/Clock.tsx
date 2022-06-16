import { Component } from 'react';

type Props = {};
type State = {
  readonly now: Date;
};

class Clock extends Component<Props, State> {
  state: State = {
    now: new Date(),
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        // uniquement les changements (et pas tout le state)
        now: new Date(),
      });
    }, 1000);
  }
  render() {
    const { now } = this.state;
    return <div className="Clock">{now.toLocaleTimeString()}</div>;
  }
}

export default Clock;
