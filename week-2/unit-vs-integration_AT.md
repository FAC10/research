## Unit testing vs Integration testing ##

Adapted from: [StackOverflow](http://stackoverflow.com/questions/5357601/whats-the-difference-between-unit-tests-and-integration-tests)

A **unit test** is a test written by the programmer to verify that a relatively small piece of code is doing what it is intended to do.
1. They are narrow in scope.
1. They should be easy to write and execute.
1. Their effectiveness depends on what the programmer considers to be useful.

*Things outside the code under test are mocked or stubbed out*

Unit tests shouldn't have dependencies on outside systems.


An **integration test** is done to demonstrate that different pieces of the system work together.

Integration tests cover whole applications, and they require much more effort to put together. They usually require resources like database instances and hardware to be allocated for them.

Actually "integration test" gets used for a wide variety of things, from full-on system tests against an environment made to resemble production to any test that uses a resource (like a database or queue) that isn't mocked out.
