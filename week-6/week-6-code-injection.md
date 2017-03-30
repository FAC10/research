# :collision: Script Injections :smiling_imp:

![Mom cartoon](https://imgs.xkcd.com/comics/exploits_of_a_mom.png)

## What are they?

The vulnerable website needs to directly include user input in its pages. An attacker can then insert a string that will be used within the web page and treated as code by the victim’s browser.

## What do they look like?

There are various ways to inject code maliciously...

#### 1. Incorrectly filtered escape character

```js
const query = `SELECT * FROM users WHERE name = '${username}';`

// A username of 'oli' would results in a query of:
`SELECT * FROM users WHERE name = 'oli';`

// But a malicious user could input 'OR '1'='1
`SELECT * FROM users WHERE name = '' OR '1'='1';`

```

In the above example, `1=1` will evaluate to true, thereby allowing access to user information.

#### 2. Incorrect Type Handling

```js
const userID = request.id;
const query = `SELECT * FROM users WHERE id = ${userID}`;

// A malicious user could enter 1;DROP TABLE users to make the query:
`SELECT * FROM users WHERE id=1; DROP TABLE users;`
```

A string (i.e. malicious code) can be passed instead of a number for userID in this example.

## What's the worst that could happen?

![this](https://media.giphy.com/media/UStsn0sQSC69a/giphy.gif)

- Delete the entire database: DROP ALL DATABASES.

- Update other people's accounts.

- Read other people's passwords.

- _Once you've worked out how the database works, there's not much you can't do_ :exclamation:

When considering that JavaScript has access to the following, it’s easier to understand how creative attackers can get with JavaScript.

- Malicious JavaScript has access to all the same objects the rest of the web page has, including access to cookies. Cookies are often used to store session tokens, if an attacker can obtain a user’s session cookie, they can impersonate that user.

- JavaScript can read and make arbitrary modifications to the browser’s DOM (within the page that JavaScript is running).

- JavaScript can use XMLHttpRequest to send HTTP requests with arbitrary content to arbitrary destinations.

- JavaScript in modern browsers can leverage HTML5 APIs such as accessing a user’s geolocation, webcam, microphone and even the specific files from the user’s file system. While most of these APIs require user opt-in, XSS in conjunction with some clever social engineering can bring an attacker a long way.

## Where does THE LAW stand?

The [Computer Misuse Act of 1990](http://www.legislation.gov.uk/ukpga/1990/18/section/1) states that "A person is guilty of an offence if s/he causes a computer to perform any function with intent to secure access to any program or data held in any computer"

![HACKER](https://media.giphy.com/media/xT8qB2HYA1vVSxooSY/giphy.gif)


## How to sanitize your code :innocent:

SQL Injection flaws are introduced when software developers create dynamic database queries that include user supplied input.

To avoid SQL injection flaws is simple.

Developers need to either:

a) stop writing dynamic queries;

and/or

b) prevent user supplied input which contains malicious SQL from affecting the logic of the executed

To protect a web site from SQL injection, you can use SQL parameters.

SQL parameters are values that are added to an SQL query at execution time, in a controlled manner.

```js
txtUserId = getRequestString("UserId"); txtSQL = "SELECT * FROM Users WHERE UserId = @0"; db.Execute(txtSQL,txtUserId);
```

Note that parameters are represented in the SQL statement by a `@ marker`.

The SQL engine checks each parameter to ensure that it is correct for its column and are treated literally, and not as part of the SQL to be executed.

```js
txtNam = getRequestString("CustomerName");
txtAdd = getRequestString("Address");
txtCit = getRequestString("City");
txtSQL = "INSERT INTO Customers (CustomerName,Address,City) Values(@0,@1,@2)";
db.Execute(txtSQL,txtNam,txtAdd,txtCit);
```

### Primary Defenses

- Defense Option 1: Prepared Statements (with Parameterized Queries)
- Defense Option 2: Stored Procedures
- Defense Option 3: White List Input Validation
- Defense Option 4: Escaping All User Supplied Input

## Resources

- Youtube video - [Running an SQL Injection Attack](https://www.youtube.com/watch?v=ciNHn38EyRc)

- Youtube video - [Hacking websites with SQL Injection](https://www.youtube.com/watch?v=_jKylhJtPmI)

- [Online tutorial](https://www.codebashing.com/sql_demo) on code injection
- [Wikipedia](https://en.wikipedia.org/wiki/SQL_injection) page on SQL Injection
- [SQL Injection Prevention Cheatsheet](https://www.owasp.org/index.php/SQL_Injection_Prevention_Cheat_Sheet)
