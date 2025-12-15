function getUserName() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('mosche');
    }, 1000);
  });
}

// getUserName().then((name) => console.log('hello ' + name));

function loadScore() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const score = 56;
      resolve(score);
    }, 1500);
  });
}

// loadScore().then((score) => console.log(score));

function checkEven(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number % 2 === 0) {
        resolve('even');
      }
      reject('odd');
    }, 800);
  });
}

checkEven(13)
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
