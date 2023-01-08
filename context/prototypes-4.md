### Prototypes chain

```js
const bob = { name: 'Bob' };

bob.__proto__.sayHello = function () {
  console.log(this.name);
};

bob.__proto__.secondName = 'Marley';

bob.sayHello();
console.log(bob.secondName);
```

- [Next](./prototypes-5.md)
- [Back](./prototypes-3.md)
