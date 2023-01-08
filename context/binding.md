### Context bindings

##### The operator 'new'

```js
function possibleConstructor() {
  // this = {};
  // this.__proto__ = possibleConstructor.prototype;

  this.field = 'field';
  console.log(this);

  // return this
}

possibleConstructor();
new possibleConstructor();
```

##### Methods bind, call, apply

```js
function showContext() {
  console.log(this);
}

const showWindow = showContext.bind(window);
const showArray = showWindow.bind(Array); // nope
showWindow();
showArray();
```

##### I love you js #8721

```js
class WrongContext {
  whoAmI = 'wrongContext';

  showThis = () => {
    console.log(this);
  };
}

const instance = new WrongContext();
const showThisInGlobalScope = instance.showThis;
showThisInGlobalScope(); // nope
showThisInGlobalScope.call(window); // nope
```

- [Next](./extra.md)
- [Back](./context.md)
