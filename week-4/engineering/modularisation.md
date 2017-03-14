## Modules in Node

Node encourages composing complex and powerful applications out of smaller simpler pieces.

One advantage of this method of writing code is that modules can alter their functionality by adding other modules as can a developer building an application.

### Why Is Modularisation A Good Idea?

### ...But don't get carried away
Modularity is a powerful concept, but just like anything else its easy to get carried away. Just because every little helper function and object _can_ be its own module, doesn't mean it necessarily should.

Splitting code off into a new module should have benefits like allowing a particularly bit of fuctionality to be shared in the NPM ecosystem or reused in other project.It can also make code cleaner and more legible.

### What is the module system?
Modules not only allow you to organise code they also allow you to hide information and return only certain selected values from a module by explicitly specifying what you export.

### How does `require`  work?
The module loading mechanism in Node.js is caching the modules on the first require call. It means that every time you use `require('awesome-module')` you will get the same instance of awesome-module, which ensures that the modules are unique and have the same state across your application.

### Module.exports
The module.exports or exports is a special object which is included in every JS file in the Node.js application by default. module is a variable that represents the current module and exports is an object that will be exposed as a module.

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

#### Community
One of the key advantages of Node.js is **NPM** (Node Package Manager) and its community. The NPM ecosystem is hugely popular and there are currently over 400,00 node modules in existence.

##### "There's a module for That"
Because modules are built small there are packages for everything under the sun. There are testing suites like mocha, development server modules like browser-sync.


### Modules on the client side??
Prior to Node.js modules did not exist natively in javascript. In order to implement a similar separation of concerns you can separate client side js into separate folder which are all linked in script tags.
Due to the popularity of Node and the advantages of modularisation.
With ES6 the next version of JS this will become a [native]('http://exploringjs.com/es6/ch_modules.html') feature of the language.

```js
import * as myModule from 'my-module';
```
