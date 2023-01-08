### Try to guess the context

```js
'use strict';

function f() {
  console.log(this);
}

const user = {
  name: 'Bob',
  showMe: f,
};

user.showMe.call({ weWereWrong: true });
```

- [Next](./context.md)
- [Back](./try-to-guess-3.md)
