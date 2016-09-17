/**
 * Created by Ayush on 9/10/2016.
 */
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var bcrypt = require("bcrypt-nodejs");

module.exports = function (app, models) {

    var userModel = models.userModel;

    var users = [
        { _id: "123",username: "alice", password: "alice"},
        { _id: "234",username: "bob", password: "bob"},
        { _id: "345",username: "charly", password: "charly"},
        { _id: "456",username: "jannunzi", password: "jannunzi"}
    ];

    app.get("/auth/facebook",facebookLogin);
    app.get("/api/user",getUsers);
    app.post("/api/login",passport.authenticate("local"),login);
    app.post("/api/logout",logout);
    app.get("/api/user/:userId", findUserById);
    app.post("/api/user",createUser);
    app.put("/api/user/:userId",updateUser);
    app.delete("/api/user/:userId",deleteUser);
    app.get("/api/loggedIn",loggedIn)
    app.post("/api/register",register);


    passport.use("local", new LocalStrategy(localStrategy));
    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);
    
    function facebookLogin(req,res) {
        res.send(200);
    }


    function localStrategy(username, password, done) {
        userModel
            .findUserByUsername(username)
            .then(function (user) {
                    if(user && bcrypt.compareSync(password, user.password )){
                        done(null,user);
                    }else {
                        done(null, false);
                    }
                },
                function (err) {
                    done(err);
                })
    };

    function serializeUser(user, done){
        done(null, user);
    }

    function register(req,res){
        var username = req.body.username;
        var password = req.body.password;

        userModel
            .findUserByUsername(username)
            .then(
                function (user) {
                    if(user){
                        res.status(400).send("Username already exists");
                        return;
                    } else{
                        req.body.password = bcrypt.hashSync(req.body.password);
                        return userModel
                            .createUser(req.body)
                    }
                },
                function (err) {
                    res.status(400).send("Username already exists");
                }
            )
            .then(
                function (user) {
                    if(user){
                        req.login(user,function (err) {
                            if(err){
                                res.status(400).send(err);
                            } else {
                                res.json(user);
                            }
                        })
                    }
                }
            )
    }

    function deserializeUser(user, done) {
        userModel
            .findUserById(user._id)
            .then(
                function (user) {
                    done(null,user);
                },
                function (err) {
                    done(err,null);
                }
            );
    }

    function login(req,res){
        var user = req.user;
        res.json(user);
    }

    function loggedIn(req,res) {
        if(req.isAuthenticated())
            res.json(req.user);
        else
            res.send('0');
    }

    function logout(req,res) {
        req.logout();
        res.send(200);
    }



    function deleteUser(req,res) {
        var id = req.params.userId;
        userModel
            .deleteUser(id)
            .then(
                function (stats) {
                    console.log(stats);
                    res.send(200);
                },
                function (error) {
                    res.statusCode(404).send(error);
                });
        // for(var i in users){
        //     if(users[i]._id === id){
        //         users.splice(i,1)
        //         res.send(200);
        //         return;
        //     }
        // }
        // res.send(400);
    }

    function updateUser(req,res) {
        var id = req.params.userId;
        var newUser = req.body;

        userModel
            .updateUser(id,newUser)
            .then(
                function (stats) {
                    res.send(200);
                },
                function (error) {
                    res.statusCode(404).send(error);
                }
            )

        // for(var i in users){
        //     if(users[i]._id === id){
        //         users[i].username = newUser.username;
        //         users[i].lastName = newUser.lastName;
        //         res.send(200);
        //         return;
        //     }
        // }
        // res.send(400);

    }

    function createUser(req,res){
        var user = req.body;
        userModel
            .createUser(user)
            .then(function (user) {
                    console.log(user);
                    res.json(user);
                },
                function (error) {
                    res.statusCode(400).send(error);
                })
    }

    function getUsers(req,res) {
        var username = req.query['username'];
        var password = req.query['password'];
        if(username  && password){
            findUserByCredentials(username,password,req,res);
        } else if(username){
            findUserByUsername(username,res);
        } else {
            res.send(users);
        }
    };

    function findUserByUsername(username,res){
        for(var i in users){
            if(users[i].username === username) {
                res.send(users[i]);
                return;
            }
        }
        res.send({});
    }

    function findUserById(req,res) {
        var id = req.params.userId;
        userModel
            .findUserById(id)
            .then(function (user) {
                    res.send(user);
                },
                function (error) {
                    res.statusCode(404).send(error);
                })
        // for(var i in users){
        //     if(users[i]._id === id) {
        //         res.send(users[i]);
        //         return;
        //     }
        // }
        // res.send({});
    }

};