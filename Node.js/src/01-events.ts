import EventEmitter from 'events';

interface User {
  username: string;
}

// const events = new EventEmitter();

// events.on('user:created', (user: User) => {
//   console.log(user.username + ' created');
// });

// const user: User = {
//   username: 'romain'
// };

// process.nextTick(() => {
//   events.emit('user:created', user);
// });

// // document.addEventListener('click', (event) => {});
// // document.dispatchEvent(new MouseEvent('click'));

// console.log('FIN');


class UserService extends EventEmitter {
  async createUser(user: User) {
    const userCreated = await Promise.resolve(user);
    this.emit('user:created', user);
  }
}

const userService = new UserService();
userService.on('user:created', (user: User) => {
  console.log(user.username + ' created');
});


userService.createUser({username: 'toto'});
userService.createUser({username: 'titi'});
userService.createUser({username: 'tata'});
