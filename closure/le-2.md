### Try to guess

```js
function makeWorker() {
  let name = 'Pete';

  return function () {
    console.log(name);
  };
}

let name = 'John';
let work = makeWorker();
work();
```

- [Next](./le-3.md)
- [Back](./le-1.md)
