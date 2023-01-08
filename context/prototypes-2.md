### What is \_\_proto\_\_

```js
function MyConstructor() {}

const myInstance = new MyConstructor();

console.log(myInstance.__proto__);
// { constructor: MyConstructor }

console.log(myInstance.__proto__ === MyConstructor.prototype); // true
```

- [Next](./prototypes-3.md)
- [Back](./prototypes-1.md)
