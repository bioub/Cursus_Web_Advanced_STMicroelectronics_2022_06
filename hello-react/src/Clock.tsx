import { Component } from 'react';
import { format as formatDate } from 'date-fns';

type Props = {
  readonly format?: string;
  readonly delay?: number;
};
type State = {
  readonly now: Date;
};

class Clock extends Component<Props, State> {
  state: State = {
    now: new Date(),
  };

  private _interval: any;

  componentDidMount() {
    const { delay = 1000 } = this.props
    console.log('componentDidMount')
    this._interval = setInterval(() => {
      this.setState({
        // uniquement les changements (et pas tout le state)
        // (pour les clés de premier niveau)
        now: new Date(),
      });
    }, delay);
  }
  componentDidUpdate(prevProps: Props) {
    const { delay = 1000 } = this.props
    if (prevProps.delay !== this.props.delay) {
      console.log('componentDidUpdate delay changed');

      clearInterval(this._interval);
      this._interval = setInterval(() => {
        this.setState({
          // uniquement les changements (et pas tout le state)
          // (pour les clés de premier niveau)
          now: new Date(),
        });
      }, delay);
    }
  }
  componentWillUnmount() {
    clearInterval(this._interval);
  }
  render() {
    const { now } = this.state;
    const { format = 'HH:mm:ss' } = this.props;
    return <div className="Clock">{formatDate(now, format)}</div>;
  }
}

export default Clock;
