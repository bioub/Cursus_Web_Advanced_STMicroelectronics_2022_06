import { deprecate, promisify } from "util";

function lambda() {
  deprecate(console.log, 'the lambda function is deprecated')
}

lambda();

const timeout = promisify(setTimeout);

timeout(1000).then(() => {
  console.log('1s');
})
