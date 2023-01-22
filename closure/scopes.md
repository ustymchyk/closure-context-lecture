### Scopes

##### Functional lexical environment

```js
function f() {
  var a = 'a';
  let b = 'b';
  const c = 'c';
}

console.log(a, b, c);
```

##### Block lexical environment

```js
if (true) {
  var a = 'a';
  const b = 'b';
}
console.log(a);

for (const i of [1]) {
  var c = i;
}
console.log(c);

{
  var b = 'b';
  const c = 'c';
}
console.log(b);
```

- [Next](./hoisting.md)
- [Back](./le-6.md)
