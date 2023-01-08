### How context works

##### Context doesn't exist until call is happened

```js
function f() {
  console.log(this);
}

const user = {
  name: 'Bob',
  showMe: f,
};

user.showMe.call({ context: true });
```

##### Context (almost)always refers to an method' object

```js
const user = {
  checkThis() {
    console.log(this);
  },
};

user.checkThis();
```

- [Next](./binding.md)
- [Back](./try-to-guess-3.md)
