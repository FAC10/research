## Unit vs. Integration testing
:rage: :facepunch: :sparkles: :dizzy_face:

## First things first
It's not _really_ unit vs. integration. They are both part of complete and thorough testing. 

Basics
---
A **unit test** is a test written by the programmer to verify that a relatively small piece of code is doing what it is intended to do.

* They are narrow in scope.
* They should be easy to write and execute.
* Their effectiveness depends on what the programmer considers to be useful.
* This tests each of them in a vaccum and does not test how they all work when combined. <br>
Unit tests are useful to developers but do not mean much to users. <br>
* They are relatively easy to write as each test only tests one function or one conceptual unit. <br>



*Things outside the code under test are mocked or stubbed out*

Unit tests shouldn't have dependencies on outside systems.


* integration = testing of the entire program to make sure it works as a whole as it should. <br>
Integration tests require a lot more work to put together, but they also have more meaning to a user. <br>
eg. a user may not care/understand that the function getUserInput() works properly, but when this is shown to work in relation to their overall experience of the app they very well may care and/or understand re: the tests. <br>
For an integration test the actual databases/information is used rather than mocked information meaning you get a more accurate view of how the system works together.<br>
the name integration testing refers to the integration of each of the functions into eachother

### Handy comparison
[stolen from here](http://www.softwaretestingclass.com/what-is-difference-between-unit-testing-and-integration-testing/)
 <br> <br>
![](/assets/unit--v-int-image.png)
