## Modularistation

## Async

## Why Use Asynchronous Functions
Node is designed to handle incoming requests all at once. It can keep busy with other tasks while waiting for an API response or a file to write to the filesystem.

As JavaScript itself is single-threaded this means that heavy computation is expensive, so it is more efficient to offload as much as possible to asynchronous calls like background workers and APIs.

### Error-first callbacks

Since Node depends on async code to run fast it's important to have a dependable callback pattern. This is why the standard is to write 'error-first' callbacks. Having a convention means that the composition of callbacks is possible and different modules are more compatible.

You are dealing with tasks that get dispatched, go off and do something in the background, and then complete successfully or abort due to failure. Since you can never predict errors you have to plan on them always happening.

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

#### Avoiding `throw`

Since we are often relying on long chains of asynchronous callbacks we should avoid throwing errors where possible, as this will cause the entire application to stop running.

### Synchronous Functions

Sometimes you'll need your code to run synchronously — e.g. if you need the result of the first API call to create the second request.
