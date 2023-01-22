### Hoisting

##### Functions

```js
f();

function f() {
  console.log('f');
}
```

##### Var

```js
console.log(a);
var a = 10;
```

##### Temporary dead zone

```js
console.log(a);
let a = 10;
```

- [Next](./extra.md)
- [Back](./scopes.md)
