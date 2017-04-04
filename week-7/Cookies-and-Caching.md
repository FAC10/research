
# Cookies

![alt tag](http://cdn.makeuseof.com/wp-content/uploads/2016/03/supercookies-670x335.jpg?187d39)

### History

In June 1994 Louis J. "Lou" Montulli II at Netscape Communications Corporation invented the HTTP cookie.

### Origin
Some people believe the name for internet cookies came from the fairy tale about two children called Hansel and Gretel. The children were able to mark their trail through a dark forest by dropping “cookie crumbs” behind them so that they could see where they had been.


### What are cookies
Cookies are small files sent from a website that are downloaded to your computer when visiting a website.

*They collect only information that the browser tells them about.*

Cookies are designed to let websites remember *stateful* information such as items added to a shopping cart or record user's browsing activity such as logging in.

They can also be used to remember arbitrary pieces of informations such as previously entered input data.

The cookie has many names: HTTP Cookie, Web Cookie, Internet Cookie, Browser Cookie or just 'cookie'.

### Stateless vs Stateful
stateless: there is no memory of the past.
* Every transaction is performed as if it were being performed for the first time

stateful: there is memory of the past.
* Every transaction is performed as if it were being done for the very first time

### Question:
I was reading the wiki for cookies and they said it is needed to retain stateful information such as item in cart etc. But why do you need to do it? Why don't just store the state in database table for example?

### Answer:
- You can store the state in the db but you need to know who is the owner of that state.
- You need to identify the client in between the requests.
- With a cookie you can save the cart of someone who isn't logged in or registered yet.
- Think of the cookies like a caller id for the browser. That is their main use. When you hit my web server the first time with your browser, I say, 'hey, let me set this caller id somewhere on your browser' so next time when you call, I'll just read it and then I know it's you again.
- Once I know it's you, then I can look in my db for more info, such as your cart items.
- Also the caller id I set can't be read or modified by other websites, if they want to identify you they need to set their own.



### Trivia
- Cookies have a certain life span defined by their creators.




### Types of cookies
** Session cookie ** - also known as an in-memory cookie or transient cookie. Exists only in temporary memory while a user navigates a site.

** Persistent cookie or Tracking cookies ** - Rather than expiring when a browser closes a persistent cookie expires at a specific date or after a specific length of time. Its information will be transmitted to the server every time the user visits the website it belongs to or views a resource belonging to that website.
A secure cookie can only be transmitted over an encrypted connection i.e HTTPS.

** Third-party cookies ** - These are cookies that allow websites to track users from a different domain.

** Flash cookies ** - respawn cookies after they have been deleted. In order to track an individual from one website to another, the different sites all have to share some code from a third party website. The code that creates and reads the tracking cookie is hosted by the third party and it can keep reading its own cookies as you hop from site to site.
Because LSOs are stored by your Flash player and not your browser they can be used to track all the web activity originating from one computer, not just from one browser.

** Authentication cookies **
An important type of cookie used by web servers to know whether the user is logged in or not.
The security of an authentication cookie depends on the security of the issuing website and the user's browser and whether or not the cookie data is encrypted.


### What is Behavioral Targeting?

Behavioral targeting is a technique used by online publishers and advertisers to increase the effectiveness of their campaigns through information collected on an individual’s Web-browsing behavior, such as the pages they have visited or the searches they have made, to select which advertisements to display to that individual.

**How does it work?**
When a user visits a website a cookie is placed onto the computer. The cookie has details about your visit that help separate you into a specific group. From that point, websites that use behavioral targeting will only show you information that is relevant to you.

**How is this achieved?** Through tracking using third-party cookies.

![alt tag](https://www.dropbox.com/s/fro4o9c3x4irnot/cookie.png)

- Effective tool vs. violation of privacy debate. A site has access to your browsing history within its own site. That's how you see relavant ads from the same website. This is not bad, it's actually quite helpful sometimes. But what about other unwanted ads?


# Caching

### What is caching?
Browser: Yo! You got index.html?
Server: (Looking it up…)
Sever: Totally, dude! It’s right here!
Browser: That’s rad, I’m downloading it now and showing the user

simples: a cache is a temporary storage area.

### how does caching work when I visit a webpage?
 1. the files (assets) of that page are automatically stored on your hard drive in a cache subdirectory under the directory of your browser
 2. If you revisit the page in the future your browser gets these files from the cache.

### Why do we cache?
  w3.org: "Caching would be useless if it did not significantly improve performance"

* eliminates the need to send many requests and responses

* fetching something over the network is both slow and expensive

google: "the ability to cache and reuse previously fetched resources is a critical aspect of optimizing for performance"

### Cache Algorithms
 - Least Frequently Used (LFU) uses a counter to keep track of how often an entry is accessed; the entry with the lowest count is removed first.
- Least Recently Used (LRU) keeps recently used items near the top of cache; when the cache limit has been reached, items that have been accessed less recently are removed.
- Most Recently Used (MRU) removes the most recently used items first; this approach is good for situations in which older items are more likely to be accessed.


### Cookies and Caching
Although cookies and caching are two ways to store data on client’s machine, there is a difference between cache and cookies and they serve different purposes.
 - Cookie is used to store information to track different characteristics related to user, while cache is used to make the loading of web pages faster.
 - Cookies stores information such as user preferences, while cache will keep resource files such as audio, video or flash files.
 - Typically, cookies expire after some time, but cache is kept in the client’s machine until they are removed manually by the user.


### What is HTML Local Storage?
With local storage, web applications can store data locally within the user's browser.
Before HTML5, application data had to be stored in cookies, included in every server request. Local storage is more secure, and large amounts of data can be stored locally, without affecting website performance.
Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the serve


### **Resources**:
[How advertisers use internet cookies](http://www.wsj.com/video/how-advertisers-use-internet-cookies-to-track-you/92E525EB-9E4A-4399-817D-8C4E6EF68F93.html)
