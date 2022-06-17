import React, { Component } from 'react';

type Props = {
  readonly items: string[];
};
type State = {
  readonly value: string;
  readonly menuOpen: boolean;
};

class Select extends Component<Props, State> {
  state: State = {
    value: this.props.items[0] ?? '',
    menuOpen: false,
  };
  handleClick = () => {
    const { menuOpen } = this.state;
    this.setState({
      menuOpen: !menuOpen,
    });
  };
  render() {
    const { items } = this.props;
    const { value, menuOpen } = this.state;

    // const itemsEls: JSX.Element[] = [

    // ];

    // for (const item of items) {
    //   itemsEls.push(<div className="item">{item}</div>)
    // }

    const itemsEls = items.map((item) => <div className="item">{item}</div>);

    return (
      <div className="Select" onClick={this.handleClick}>
        <div className="value">{value}</div>
        {menuOpen && <div className="Menu">
          {itemsEls}
        </div>}
      </div>
    );
  }
}

export default Select;
