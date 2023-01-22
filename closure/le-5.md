### Counter

```js
function createCounter() {
  let counter = 0;

  return function increment() {
    console.log(++counter);
  };
}

const incrementer1 = createCounter();
const incrementer2 = createCounter();

incrementer1();
incrementer1();

incrementer2();

incrementer1();
incrementer1();
```

- [Next](./le-6.md)
- [Back](./le-4.md)
