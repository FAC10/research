# fs module #
adapted from: https://www.tutorialspoint.com/nodejs/nodejs_file_system.htm

Node implements File I/O using the fs module:
```javascript
var fs = require("fs");
```
### Synchronous vs Asynchronous ###

Every method in the fs module has synchronous as well as asynchronous forms. Asynchronous methods take the last parameter as the completion function callback and the first parameter of the callback function as error. It is better to use an asynchronous method instead of a synchronous method, as the former never blocks a program during its execution, whereas the second one does.

#### Example ####
```javascript
var fs = require("fs");

// Asynchronous read
fs.readFile('input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");
```
#### Open a File ####
```javascript
fs.open(path, flags[, mode], callback);
```

#### Get File Information ####
```javascript
fs.stat(path, callback)
```

#### Writing a File ####
```javascript
fs.writeFile(filename, data[, options], callback);
```
Over-write the file if the file already exists.

#### Reading a File ####
```javascript
fs.read(fd, buffer, offset, length, position, callback);
```
This method will use file descriptor to read the file.

#### Closing a File ####
```javascript
fs.close(fd, callback);
```
#### Delete a File ####
```javascript
fs.unlink(path, callback);
```
#### Create a Directory ####
```javascript
fs.mkdir(path[, mode], callback);
```
#### Read a Directory ####
```javascript
fs.readdir(path, callback);
```
#### Remove a Directory ####
```javascript
fs.rmdir(path, callback);
```
from https://www.sitepoint.com/accessing-the-file-system-in-node-js/:

```javascript
fs.watch(path, {persistent: true}, callback);
```

#### ...and over 50 more functions... ####

## Path module ##
```javascript
var path = require('path');
```
Node can tell you where in the file system it is working by using</br>
```javascript
__filename
```
and
```javascript
__dirname
```

To find the current working directory, you can use:
```javascript
process.cwd()
```
To change directories, you can use
```javascript
process.chdir()
```
If you need to find the path to the node executable, use
```javascript
process.execPath()
```
To get a file extension use
```javascript
path.extName()
```
To get the file name use:
```javascript
path.baseName()
```
If you need only the file name and not the extension, use the baseName() method, but also pass it the extension name to exclude.

To return only the directory portion of a path use
```javascript
path.dirname()
```
To resolve the cross-platform path separator problem use the sep property of the path module.</br>
sep automatically determines what is needed based on the OS.
For example:
```javascript
var path = require("path");
var directories = ["dirA", "dirB", "dirC"];
var directory = directories.join(path.sep);
console.log(directory);
```
gives back:</br>
dirA/dirB/dirC on UNIX or</br>
dirA\dirB\dirC on UNIX reinvented, poorly.

Conversely the delimiter property can be used to split() the path in a OS agnostic way.
