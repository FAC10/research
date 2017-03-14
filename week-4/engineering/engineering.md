# Engineering

## Modules

Node encourages composing complex and powerful applications out of smaller simpler pieces.

One advantage of this method of writing code is that modules can alter their functionality by adding other modules as can a developer building an application.

### Why Is Modularisation A Good Idea?

### What is `module.exports`?

`module.exports` (or `exports`) is a special object which is included in every JS file in the Node.js application by default. `module` is a variable that represents the current module and `exports` is an object that will be exposed as a module.

```js
// add.js
function add (a, b) {  
  return a + b
}

module.exports = add
```

Meanwhile inside index.js

```js
// index.js
const add = require('./add')

console.log(add(4, 5))  
//9
```

### What is `require`?

This is how you import and use modules in your code.

```js
var fs = require('fs');
```

The module loading mechanism in Node.js is caching the modules on the first `require` call. It means that every time you use `require('awesome-module')` you will get the same instance of awesome-module, which ensures that the modules are unique and have the same state across your application.

## Async

### Why Use Asynchronous Functions
Node is designed to handle incoming requests all at once. It can keep busy with other tasks while waiting for an API response or a file to write to the filesystem.

As JavaScript itself is single-threaded this means that heavy computation is expensive, so it is more efficient to offload as much as possible to asynchronous calls like background workers and APIs.

### Error-first callbacks

Since Node depends on async code to run fast it's important to have a dependable callback pattern. This is why the standard is to write 'error-first' callbacks. Having a convention means that the composition of callbacks is possible and different modules are more compatible.

1. **The first argument is reserved for the error.** If an error occurs it will be returned as the first argument.
2. **The second argument is reserved for the successful response.** If no error occurs we set the first argument to `null`, which ensures the response can be passed as the second argument.

```javascript
function doSomething(file, cb) {
  fs.readFile(file, function(err, res) {
    if (err) {
      // You can pass the err to the callback
      cb(err);
    }
    // You should pass null as the first argument (as there is no error)
    cb(null, res);
  })
}
```

### Avoiding `throw`

Since we are often relying on long chains of asynchronous callbacks we should avoid throwing errors where possible, as this will cause the entire application to stop running.

### Synchronous Functions

Sometimes you'll need your code to run synchronously — e.g. if you need the result of the first API call to create the second request.

## Input/Output

Node implements file I/O using the `fs` module, and `path` gives you filesystem navigation.

```javascript
var fs = require("fs");
var path = require('path');
```

## FS tasks
`fs` allows you to create and delete files on the file system, which you can't do in the browser (for security reasons).

## Path issues

To resolve the cross-platform path separator problem use the `sep` property of the path module.

`sep` automatically determines what is needed based on the OS.

For example:

```javascript
var path = require("path");
var directories = ["dirA", "dirB", "dirC"];
var directory = directories.join(path.sep);
console.log(directory);
```
gives back:

`dirA/dirB/dirC` on UNIX or</br>
`dirA\dirB\dirC` on UNIX reinvented, poorly.

Conversely the `delimiter` property can be used to `split()` the path in a OS agnostic way.

## Working with URLs

### URL Objects

A URL is a Uniform Resource Locator — the web address of an online resource, i.e. website or document.

`new URL()` creates and returns a URL object composed from given parameters.

```js
const url = new URL('../gmail', 'http://www.google.com/gmail');
console.log(url.hostname); // "www.example.com"
console.log(url.pathname); // "/webpage"
```

## What is a Query String?

A query string is part of the URL that does not fit conveniently into the hierarchical path structure:

`http://www.bbc.co.uk/weather/`

It is represented by a question mark followed by one or more parameters:

`http://www.bbc.co.uk/search?q=london`

### Convert JS objects into query strings & back again
This allows us to store and access user input and can be used to track how they got to the page.

## Manually Creating Query Strings is a **Bad Idea**

1. URL encoding: Since URLs often contain characters outside the ASCII set, the URL has to be converted into a valid ASCII format. URL encoding replaces unsafe ASCII characters with a "%" followed by two hexadecimal digits.

2. Escape characters: the backslash you use before characters you type directly. Problematic if you’re typing a query string manually…

For example: Chrome converts backslashes to forward slashes.

## Questions

1. Why would you separate your code into modules?
2. Why do you have to use callbacks with asynchronous code?
3. Why do you think browsers don't let websites have filesystem access?
