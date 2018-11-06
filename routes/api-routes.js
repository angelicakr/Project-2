// INSIDE THE ROUTES FOLDER
// Requires for models and passport
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
    //Middleware with local strategy, valid login and invalid errors
    app.post("/api/login", passport.authenticate("local"), function(req, res){
        //Send res to redirect-using post not get
        res.json("/members");
    });
//sign up valid or invalid errors
    app.post("/api/signup", function(req,res){
        console.log(req.body);
        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then(function() {
            res.redirect(307, "/api/login");
        }).catch(function(err){
            console.log(err);
            res.json(err);
        });
    });
//Route to log out User
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });

    //Route for user data
    app.get("api/user_data", function(req, res){
        if (!req.user){
            //not logged in, empty object
            res.json({});
        } else {
            //send back user email  & id
            res.json ({
                email: req.user.email,
                id: req.user.id
            });
        }
    });
};