function getHello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('hello');
    }, 500);
  });
}

// getHello().then((resolve) => console.log(resolve));
function addAsync(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 500);
  });
}
// addAsync(5, 7).then((resolve) => console.log(resolve));

function login(username, password) {
  return new Promise((resolve, reject) => {
    if (username === 'admin' && password === '1234') {
      resolve('Login successful');
    }
    reject('Invalid credentials');
  });
}
// login('admin', '1234')
//   .then((resolve) => console.log(resolve))
//   .catch((error) => console.log(error));

function getUser() {
  return new Promise((resolve) => {
    resolve({ name: 'Dana', age: 16 });
  });
}
getUser().then((res) => console.log('User:', res.name, res.age));
