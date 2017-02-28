

# About QUnit
QUnit is a powerful, easy-to-use JavaScript unit testing framework. It's used by the jQuery, jQuery UI and jQuery Mobile projects and is capable of testing any generic JavaScript code, including itself!


## QUnit assertions [(documentation)](https://api.qunitjs.com/category/assert/) [(example repo)](https://github.com/PiotrBerebecki/qunit-demo)

---

### Quick reference:

### async()

Instruct QUnit to wait for an asynchronous operation.


### deepEqual()

A deep recursive comparison, working on primitive types, arrays, objects, regular expressions, dates and functions.

The `deepEqual()` assertion can be used just like `equal()` when comparing the value of objects, such that `{ key: value }` is equal to `{ key: value }`.


### equal()

A non-strict comparison, roughly equivalent to JUnit’s assertEquals.


### expect()

Specify how many assertions are expected to run within a test.


### notDeepEqual()

An inverted deep recursive comparison, working on primitive types, arrays, objects, regular expressions, dates and functions.


### notEqual()

A non-strict comparison, checking for inequality.


### notOk()

A boolean check, inverse of `ok()` and CommonJS’s assert.ok(), and equivalent to JUnit’s assertFalse(). Passes if the first argument is falsy.


### notPropEqual()

A strict comparison of an object’s own properties, checking for inequality.


### notStrictEqual()

A strict comparison, checking for inequality.


### ok()

A boolean check, equivalent to CommonJS’s assert.ok() and JUnit’s assertTrue(). Passes if the first argument is truthy.


### propEqual()

A strict type and value comparison of an object’s own properties.


### pushResult()

Report the result of a custom assertion


### strictEqual()

A strict type and value comparison.


### throws()

Test if a callback throws an exception, and optionally compare the thrown error.
