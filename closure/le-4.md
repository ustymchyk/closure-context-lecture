### Show number

```js
let number = 1;
number = 2;

function showNumber() { // [[Environment]] = 1;
  // LE = { outer: 1 }

  console.log(number);
}

number = 3; // LE = { id: 1, showNumber: function, number: 3 }

showNumber();
```

- [Next](./le-5.md)
- [Back](./le-3.md)
