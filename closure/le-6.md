### Counter

```js
function createCounter() {
  let counter = 0;

  return function increment() {
    counter++;

    return function log() {
      console.log(counter);
    };
  };
}

const incrementer1 = createCounter();
const logger1 = incrementer1();

logger1();
incrementer1();
incrementer1();
logger1();
```

- [Next](./le-7.md)
- [Back](./le-5.md)
