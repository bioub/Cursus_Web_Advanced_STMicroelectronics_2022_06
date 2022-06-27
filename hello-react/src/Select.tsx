import styles from './Select.module.scss';

import React, { Component } from 'react';

type Props = {
  readonly items: string[];
  readonly value: string;
  onSelection(value: string): void;
};
type State = {
  readonly menuOpen: boolean;
};

class Select extends Component<Props, State> {
  state: State = {
    menuOpen: false,
  };
  handleClick = () => {
    const { menuOpen } = this.state;
    this.setState({
      menuOpen: !menuOpen,
    });
  };
  render() {
    const { items, value, onSelection } = this.props;
    const { menuOpen } = this.state;

    // const itemsEls: JSX.Element[] = [];

    // for (const item of items) {
    //   itemsEls.push(<div className="item">{item}</div>)
    // }

    const itemsEls = items.map((item) => (
      <div className={styles.item} key={item} onClick={() => onSelection(item)}>
        {item}
      </div>
    ));

    return (
      <div className={styles.host} onClick={this.handleClick}>
        <div className={styles.value}>{value}</div>
        {menuOpen && <div className={styles.menu}>{itemsEls}</div>}
      </div>
    );
  }
}

export default Select;
