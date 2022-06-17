import { Component } from 'react';
import { format as formatDate } from 'date-fns';

type Props = {
  readonly format?: string;
};
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
    const { format = 'HH:mm:ss' } = this.props;
    return <div className="Clock">{formatDate(now, format)}</div>;
  }
}

export default Clock;
