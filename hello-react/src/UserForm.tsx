import { ChangeEvent, Component } from 'react';

type Props = {};

type State = {
  username: string;
  password: string;
  newsletter: boolean;
  gender: string;
};

class UserForm extends Component<Props, State> {
  state: State = {
    username: 'romain',
    password: '123456',
    newsletter: true,
    gender: 'Male',
  };

  handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const key = event.target.name;
    let value: string | boolean;

    if (event.target.type === 'checkbox') {
      const target = event.target as HTMLInputElement;
      value = target.checked;
    } else {
      value = event.target.value;
    }

    this.setState({
      [key]: value
    } as any);
  };

  render() {
    const { username, password, newsletter, gender } = this.state;
    return (
      <form className="UserForm">
        <div>
          Username:{' '}
          <input type="text" name="username" onChange={this.handleChange} value={username} />
        </div>
        <div>
          Password:{' '}
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
        </div>
        <div>
          Newsletter:{' '}
          <input
            type="checkbox"
            name="newsletter"
            onChange={this.handleChange}
            checked={newsletter}
          />
        </div>
        <div>
          Gender :{' '}
          <select
            name="gender" onChange={this.handleChange} value={gender}>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div>
          <button>Create User</button>
        </div>
      </form>
    );
  }
}

export default UserForm;
