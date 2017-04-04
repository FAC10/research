const hapi = require("hapi");
const server = new hapi.Server();
const joi = require("joi");
const inert = require("inert");

server.connection({
  port: 4000,
  host: "localhost"
});

server.register(inert, (err) => {
  if (err) console.log(err);

  server.route({
    method: "GET",
    path: "/{param*}",
    handler: {
      directory: {
        path: "public"
      }
    }
  });
});

server.route({
  method: "GET",
  path: "/isodate/{name}",
  handler: (req, reply) => {
    reply(`Validated date: ${req.params.name}!`);
  },
  config: {
    validate: {
      params: {
        name: joi.string().isoDate()
      }
    }
  }
});

server.route({
  method: "GET",
  path: "/get",
  handler: (req, reply) => {
    reply(`Validated query: ${req.query.name}`);
  },
  config: {
    validate: {
      query: {
        name: joi.string().regex(/^[a-zA-Z]$/gi).max(5)
      }
    }
  }
});

server.route({
  method: "POST",
  path: "/go",
  handler: (req, reply) => {
    reply(`Validated email: ${req.payload.email} Validated password: ${req.payload.password}`);
  },
  config: {
    validate: {
      payload: joi.object({
        email: joi.string().email(),
        password: joi.string().min(6).max(25),
      }).with("email", "password")
    }
  }
});


server.start(err => {
  if (err) throw err;
  console.log("server started");
});
