//INSIDE ROUTES FOLDER
var path = require("path");

//Middleware require
var isAuthenticated = require("../config/middleware/isAuthenticated.js");

module.exports = function(app){
    app.get("/", function(req, res){
        if(req.user){
            res.redirect("/members");
        }
        //this would send them to the signup page
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });

    app.get("/login", function(req,res){
        if(req.user){
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    app.get("/members", isAuthenticated, function(req, res){
        res.sendFile(path.join(__dirname, "../public/members.html"));
    });
};