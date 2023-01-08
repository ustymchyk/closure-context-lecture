### What if

```js
function Human(name) {
  this.name = name;
}

const bob = new Human('bob');

Human.prototype.hello = function () {
  console.log(`hello from ${this.name}`);
};

bob.hello();
```

- [Next](./prototypes-4.md)
- [Back](./prototypes-2.md)
