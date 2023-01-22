### Constructor

```js
function createCounter() {
  let privateValue = 0;

  function increment() {
    privateValue++;
  }

  function decrement() {
    privateValue--;
  }

  return {
    increment,
    decrement,
    get value() {
      return privateValue;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.value);
counter.decrement();
console.log(counter.value);
```

- [Next](./scopes.md)
- [Back](./le-6.md)
