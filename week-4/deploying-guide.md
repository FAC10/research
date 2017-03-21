## Deploying your app to Heroku

[Heroku Getting Started with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)

1. Install Heroku CLI [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
```sh
$ brew install heroku
```

2. Login to Heroku through the command line using the heroku command:
```sh
$ heroku login
Enter your Heroku credentials.
Email: zeke@example.com
Password:
...
```

3. Create heroku app:
```sh
$ heroku create heroku-test-demo
```

4. Deploy to heroku:
```sh
$ git push heroku master
```

5. Open your app in the browser:
```sh
$ heroku open
```

## What is PaaS?

PaaS (Platform as a service) is a set of services aimed at developers that helps them to develop, run, and manage applications without the complexity of building and maintaining the underlying infrastructure typically associated with developing and launching an app.

You can of course choose to build the infrastructure around an app yourself, but this is time consuming, and if things go wrong you're on your own. Using a PaaS such as Heroku, you can deploy quickly, forget about the infrastructure, and just focus on improving your app.

## Why is it useful to be able to deploy your code to a cloud platform, rather than running it locally?

Paas provider is responsible for hardware, utility costs etc. and developer is responsible for developing and maintaining a nice app.

## What services are there that can provide you with a platform for your code? Heroku is a good start, but try to find some others.

- [Heroku](https://www.heroku.com/)
- [Microsoft Azure (serves 65% of Fortune 500 companies)](https://azure.microsoft.com/en-us/)
- [Linode (high-performance SSD Linux servers)](https://www.linode.com/)
- [Appfog](https://www.ctl.io/appfog/)
- [Docker Cloud](https://cloud.docker.com/)

**Benefits of Using Heroku**

- you can host as many apps as you like on Heroku (though there are limits on data and Heroku has 'unscheduled downtime').
- Scale. If you make a small app that suddenly becomes popular, Heroku will adjust the servers to support the influx of new servers.
- Heroku uses Git.


## Resources:
- [Heroku Cli](https://devcenter.heroku.com/articles/heroku-cli)
- [Heroku Getting Started with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
- [What is PaaS and why does it matter?](http://www.networkworld.com/article/2163430/cloud-computing/paas-primer--what-is-platform-as-a-service-and-why-does-it-matter-.html)
- [What is PaaS in cloud cloud-computing?](http://www.dummies.com/programming/cloud-computing/hybrid-cloud/what-is-platform-as-a-service-paas-in-cloud-computing/)

## Why is it a bad idea to include certain variables in a public repository?

e.g do not show your amazon key or you may be charged 50k by amazon

## Why might some variables in your code need to change for different environments

Heroku will use a different port to the one you use locally.

## What modules might you use to help manage environment variables?

[Env2](https://github.com/dwyl/env2)


Questions:
1. What is Paas?
2. How could you share secret variables/keys with other developers?
3. Why would you rather use a .env file over a .json file?
4. Bonus: Why is our secret key accessible via the browser?
