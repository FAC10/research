# Unit vs. Integration testing
:rage: :facepunch: :sparkles: :dizzy_face:

## first things first
It's not _really_ unit vs. integration. Both are useful and can be used for the same app.

### basics
---
* unit = testing small code blocks (assumably functions) to make sure each of them work as they should. <br>
This tests each of them in a vaccum and does not test how they all work when combined. <br>
Unit tests are useful to developers but do not mean much to users. <br>
They are relatively easy to write as each test only tests one function. <br>
unit tests should not have dependancies outside the function being tested. <br>
anything which is necessary to the function is usually mocked up
* integration = testing of the entire program to make sure it works as a whole as it should. <br>
Integration tests require a lot more work to put together, but they also have more meaning to a user. <br>
eg. a user may not care/understand that the function getUserInput() works properly, but when this is shown to work in relation to their overall experience of the app they very well may care and/or understand re: the tests. <br>
For an integration test the actual databases/information is used rather than mocked information meaning you get a more accurate view of how the system works together.<br>
the name integration testing refers to the integration of each of the functions into eachother
