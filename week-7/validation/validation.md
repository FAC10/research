# Validation

## What
Making sure the stuff you're getting is the stuff you expect to get.

```js
undefined is not a function
```

This is an example of you expecting to get something but getting something else.

```
The thing what you entered into the form in the email box was not an email address
```

Here is a form of validation where we're making sure that what we're getting in the email field of a form is an email address.

## Why

It's important to make sure the data we're getting is what we expect, partly so that our app behaves how we expect to.
If we make a function that adds 1 to a number and we don't validate the input you can end with some unexpected stuff.
```js
function addOne(number){
  return number + 1
}

addOne(2) // Returns 3, yay, as expected!
addOne('2') // Returns '21', oops.
```
Because we don't check that the input is what we expect, we get unexpected output. Rubbish.

```js
function addOneValidated(number){
  if(typeof number !== 'number') {
    return 'Please enter a number!'
  };
  return number + 1;
}

addOneValidated(2) // still returns 3, yay!
addOneValidated('2') // returns 'Please enter a number'
```
This way we know what will be outputted with any input (in theory, there are edge cases and if writing a really secure addOne function there's probably more validation you'd want to do. eg ``` typeof NaN ``` returns ```'number'```).

In this situation we're looking at providing the proper experience to the user, and making sure the app behaves as expected.

HTML5 has a lot of in built validation which is great for UX, if you click a submit button on a form without filling in a required field you get immediate feedback. It is, however, not sufficient for security.

### :hocho: :fire: Malicious intentions :hocho: :fire:

Without validation your app might behave/break in unexpected ways, that's pretty bad right?<br>
What is worse is people <em>intentionally</em> breaking/accessing/generally hacking your webapp.
This is the other side of validation, which also relates to sanitisation, making sure people don't destroy your stuff.
We saw about SQL injection last week and how dangerous it can be.<br> ([If you want more info I highly recommend this video.](https://www.youtube.com/watch?v=ciNHn38EyRc))<br>This is why it's extremely important to have server side validation/sanitisation, even if you have client side validation. Anyone with malicious intent can change your client side code and bypass any client side validation, HTML5's inbuilt validation on inputs etc. are great, and I really like using them, but from a security perspective they are insufficient.

#### A note on sanitisation vs. validation
<em>"validation requires user input to conform to a certain rule or rules put forth by the developer, sanitization only cares about making sure the data being submitted doesn’t contain code."</em> [from this article](http://webdesignforidiots.net/2014/01/sanitization-vs-validation-and-the-importance-of-both-in-your-forms/)x

## How

You can write your own server side validation with regex, escaping any special characters etc, some modules have it built in (as we found out last week PG does a lot of input sanitisation for you), but we can also use the Joi module.

Joi validates Hapi headers, path parameters, query parameters, and payload data.

Check out [this example of how to use Joi](/validation/server.js)
