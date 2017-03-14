# Architecture

## Separation of Concerns

### Front-end & back-end
**In general:**

Front-end scripting is good for anything that requires user interaction, such as a simple game.

Back-end scripting is good for anything that requires dynamic data to be loaded, such as a notice that tells the user they’re logged in.

### Front-end/ client-side
The front-end, or the client-side, is everything involved with the browser and relates to what the user sees. It only uses HTML, CSS and JS.

* UX/ UI
* Input fields
* Imagery
* Buttons
* Animations/ transitions


### Back-end/ server-side
The backend is mostly worried about things like **security, structure and content management**.

Some uses of the back-end include:

* Database creation, integration, and management
* Content management system (CMS) development
* API integration
* Security settings and hack prevents
* Collecting analytics and statistics e.g. system reports of server load, number of visitors, geography of visitors, etc.
* Backup and restore technologies for website’s files and DB.


### How the back-end and front-end works together

The web application creates, deletes, changes, renames, etc items in the database. For example, when a customer purchases a ticket, that creates an item in the database, but when they have a change in their order or they wish to cancel, the item in the database is changed.

A server, in the simplest form, is a computer accessed remotely that runs software to fulfill requests from clients. In our example, the server the customer’s browser is communicating with is where the database is stored and modified.

If a site doesn't have a backend (or use a backend such as WP), it can only be a static site; it cannot update content dynamically.



## Client side vs server side

#### Server-Side Code
> Server-side handles logging in, personal information and preferences and provides the specific data which the user wants (and allows new data to be stored).

* Run with any language the server can run.
* Doesn't rely on the users hardware / software.
* Cannot be seen by the user (unless something is terribly wrong).
* Stores persistent data (user profiles, instatweets, mybook pages, etc.).
* Creates the page that the user finally sees (this is generally only true in web applications that choose to render most of their layouts on the server).

#### Client-Side Code
> Client-side makes the page interactive, sorting data in different ways if the user asks for that by clicking on elements with event triggers.

* Languages used include: HTML, CSS, and Javascript. Nothing else.
* Parsed by the user’s browser.
* Can be seen and edited by the user in full.
* Cannot store anything that lasts beyond a page refresh.
* Cannot read files off of a server directly, must communicate via HTTP requests.
* Creates the page that the user finally sees (this is generally only true in single page applications).


#### Validation
**Server Side Validation**

In Server Side Validation, the input submitted by the user is sent to the server and validated there. After the server validation, the feedback is sent back to the client by a new dynamically generated web page.

It is often better to validate user input on the Server Side because it is easier to protect against malicious users, who can bypass your Client Side scripting language and submit dangerous input to the server.

---

**Client Side Validation**

In the Client Side Validation you can provide a better user experience by responding quickly at the browser level. When you perform a Client Side Validation, all the user inputs are validated in the user's browser itself. Client Side validation does not require a round trip to the server. This type of validation is done on the browser side using script languages such as JavaScript or HTML5 attributes.

For example, if the user enters an invalid email format, you can show an error message immediately before the user moves to the next field.

Mostly the Client Side Validation depends on the JavaScript Language, so if users turn JavaScript off, it can easily bypass and submit dangerous input to the server. So the Client Side Validation can not protect your application from malicious attacks on your server resources and databases.



## Alternative back-end technologies
Other technologies for backend:
- python
- ruby
- php
- Perl
- js (when used with node )
- Erlang

### Pros of Node
* Ability to use single programming language on both client-side and server-side
* Easy to scale
* Improved performance - runs on Google's V8 JS engine & supports non-blocking I/O operations
* Supports Caching - each time a module is requested for the first time it is cached in the application memory. Means that application can load web pages and respond to user requests more quickly
* Supports commonly used tools - e.g. testing frameworks like Jasmin, npm as a package managers and task runners such as grunt.
* open source - can customize and extend based on needs

### Cons
* Lack of robust libraries - some say it lacks a strong standard library
* Unstable API - complaints that it changes at frequent intervals
* Async programming model - some developers find this more complicated than I/O programming
* Not suitable for large and complex web applications - may not be true, see walmart


## Writing for different environments

**Writing JavaScript for the browser**

Browsers come in a bunch of different forms -- sometimes with JavaScript turned off altogether, or with wildly outdated versions of JS. This means you have to write code in a very inclusive way, for example staying away from ES6 or running certain scripts only on certain browsers (IE... T_T).

**Writing JavaScript in Node**

Node -- at least when run on your own server -- works with the exact setup you install. This means you can write code using ES6 and require (import) complicated packages with a bunch of dependencies without worrying that your user won't be able to run them.

Example Tools:
* Browserify
* Babel
* Wrapping code in modules to avoid errors resulting from dependencies
(https://caolan.org/posts/writing_for_node_and_the_browser.html)


## Questions
1. If you were to re-write last week's project again, which portions would you ideally have on the backend?
2. What are the pros and cons of front-end and back-end?
3. Can you give us an example of a feature which can be in either the front-end or back-end?


## Resources
[Information on most popular stacks, LAMP and MEAN](https://www.upwork.com/hiring/development/back-end-web-developer/)
https://www.upwork.com/hiring/development/choosing-the-right-software-stack-for-your-website/
https://www.upwork.com/hiring/development/a-guide-to-server-technology/
