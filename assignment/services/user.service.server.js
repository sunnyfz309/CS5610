module.exports = function (app) {

  var userModel = require('../model/user/user.model.server');
  var passport = require('passport');

  app.post("/api/user", createUser);
  app.get("/api/user", findUsers);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);

  app.post ('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post ('/api/register', register);
  app.get ('/api/loggedin', loggedin);

  // config passport
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(
        function (user) {
          done(null, user);
        },
        function (err) {
          done(err, null);
        }
      );
  }

  // passport local strategy
  var LocalStrategy = require('passport-local').Strategy;
  passport.use(new LocalStrategy(localStrategy));

  function localStrategy(username, password, done) {
    userModel
      .findUserByUsername(username)
      .then(
        function (user) {
          if (user && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function (err) {
          if (err) {
            return done(err);
          }
        }
      );
  }

  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function loggedin(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function logout(req, res) {
    req.logout();
    res.send(200); //success
  }

  function register(req, res) {
    var user = req.body;
    userModel
      .createUser(user)
      .then(
        function (user) {
          if (user) {
            req.login(user, function (err) {
              if (err) {
                res.status(400).send(err);
              } else {
                res.json(user);
              }
            });
          }
        }
      );
  }

  function createUser(req, res) {
    var user = req.body;
    userModel
      .createUser(user)
      .then(
        function (user) {
          console.log("user created!");
          // res.json(user);
          res.status(200).send(user);
        },
        function (error) {
          if (error) {console.log(error);
            res.statusCode(400).send(error);
          }
        }
      )
  }

  function findUsers(req, res) {
    var username = req.query.username;
    var password = req.query.password;
    var user = null;
    if (username && password) {
      user =  users.find( function (user) {
        return user.username === username && user.password === password;
      });
    } else if (username) {
      user = users.find(function(user) {
        return user.username === username;
      });
    }
    res.json(user);
  }

  function findUserById(req, res) {
    var userId = req.params["userId"];
    var user = users.find(function (user) {
      return user._id === userId;
    });
    console.log(user.username);
    res.json(user);
  }

  function updateUser(req, res) {
    var userId = req.params["userId"];
    var user = req.body;

    for (var i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        users[i].username = user.username;
        users[i].password = user.password;
        users[i].firstName = user.firstName;
        users[i].lastName = user.lastName;
        res.status(200).send(user);
        return;
      }
    }
    res.status(404).send("not found!");
  }

  function deleteUser(req, res) {
    var userId = req.params["userId"];
    users.splice(users.findIndex(function(user) {
      return user._id === userId;
    }), 1);
    res.send(200);
  }

  var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonderland"  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
  ];


};




