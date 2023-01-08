### What else prototypes give us

##### Memory

```js
function CorrectConstructor() {}

CorrectConstructor.prototype.doSomething = function () {};

function WrongConstructor() {
  this.doSomething = function () {};
}

const correctInstance = new CorrectConstructor();
const wrongInstance = new WrongInstance();

console.log(correctInstance, wrongInstance);
```

##### Instanceof

```js
function Error(error) {
  this.error = error;
}

function Success(success) {
  this.success = success;
}

function handleResponse(response) {
  if (response instanceof Error) {
    console.error(response.error);
    return;
  }

  if (response instanceof Success) {
    console.log(response.success);
    return;
  }
}
```

##### Inheritance

```js
class Response {
  code;
  constructor(code) {
    this.code = code;
  }
}

class Success extends Response {
  body;
  constructor(body, code = 200) {
    super(code);
    this.body = body;
  }
}
```

- [Next](./try-to-guess-1.md)
- [Back](./prototypes-4.md)
