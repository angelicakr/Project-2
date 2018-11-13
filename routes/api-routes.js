// INSIDE THE ROUTES FOLDER
// Requires for models and passport
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
    //Middleware with local strategy, valid login and invalid errors
    // app.post("/api/login", passport.authenticate("local"), function (req, res) {
    //     //Send res to redirect-using post not get
    //     res.json("/members");
    // });
    // //sign up valid or invalid errors
    // app.post("/api/signup", function (req, res) {
    //     console.log(req.body);
    //     db.User.create({
    //         email: req.body.email,
    //         password: req.body.password
    //     }).then(function () {
    //         res.redirect(307, "/api/login");
    //     }).catch(function (err) {
    //         console.log(err);
    //         res.json(err);
    //     });
    // });
    // //Route to log out User
    // app.get("/logout", function (req, res) {
    //     req.logout();
    //     res.redirect("/");
    // });

    // //Route for user data
    // app.get("api/user_data", function (req, res) {
    //     if (!req.user) {
    //         //not logged in, empty object
    //         res.json({});
    //     } else {
    //         //send back user email  & id
    //         res.json({
    //             email: req.user.email,
    //             id: req.user.id
    //         });
    //     }
    // });

    // app.post("/api/survey", function (req, res) {
    //     console.log('route hit');
    //     db.Dogs.findAll({}).then(function (data) {
    //         for (var i = 0; i < data.length; i++) {
    //             //console.log(data[i].dataValues);
    //             // create object to store best match
    //             var bestMatch = {
    //                 name: "",
    //                 breed: "",
    //                 age: "",
    //                 gender: "",
    //                 pic: "",
    //                 profile: "",
    //                 dogDifference: 1000
    //             }
    //             // holds the user posted data
    //             var userData = req.body;
    //             var adopterScores = userData.scores;

    //             // this variable will measure the score difference between the 2 objects... 
    //             // ...being compared, lower score is better.
    //             var totalDifference = 0;
    //             var surveyDifference = 0;

    //             // will loop through each friend in the array
    //             for (i = 0; i < myArr.length; i++) {

    //                 totalDifference = 0;

    //                 // next loop through each score in myArr[i], and com pare them...
    //                 // to userData scores and calc the absolute difference.
    //                 for (x = 0; x < myArr[i].scores.length; x++) {

    //                     // calculate total score
    //                     totalDifference += Math.abs(parseInt(adopterScores[x]) - parseInt(myArr[i].scores[x]));

    //                 }

    //                 // checks if friend[i]'s totalDifference is less than the dogMatch,... 
    //                 // ...friend difference, if so, it becomes the new best match
    //                 console.log("Dogs's Name: ", myArr[i].name);

    //                 if (totalDifference <= dogMatch.matchDifference) {
    //                     // sets dogMatch variables to best match
    //                     bestMatch.name = myArr[i].name;
    //                     bestMatch.breed = myArr[i].breed;
    //                     bestMatch.age = myArr[i].age;
    //                     bestMatch.gender = myArr[i].gender;
    //                     bestMatch.pic = myArr[i].pic;
    //                     bestMatch.profile = myArr[i].profile;
    //                     bestMatch.matchDifference = totalDifference;

    //                     console.log("Your new best fur friend is " + dogMatch.name + "\n");

    //                 } else {
    //                     // character is not the best match.
    //                     console.log(" Nothing to display\n")
    //                 }
    //             }

    //             myArr.push(userData);
    //             res.json(bestMatch);
    //             console.log(bestMatch);
    //             console.log("-----------------------------------------------");

    //         }

    //     });
    //  res.send("route hit");
    // });

    app.get("/api/survey", function (req, res) {
        console.log('route hit');
        var updatedDogs = [];
        db.Dogs.findAll({}).then(function (data) {
            for (var i = 0; i < data.length; i++) {
                var currentDog = data[i].dataValues
                var dogInfo = {}
                var myArr = []



                for (var x in currentDog) {
                    //console.log(x)
                    //console.log(currentDog[x]);
                    if (x == 'id') {
                        dogInfo.id = currentDog[x]
                    } else if (x == 'name') {
                        dogInfo.name = currentDog[x]
                    } else if (x == 'breed') {
                        dogInfo.breed = currentDog[x]
                    } else if (x == 'age') {
                        dogInfo.age = currentDog[x]
                    } else if (x == 'gender') {
                        dogInfo.gender = currentDog[x]
                    } else if (x == 'experience') {
                        dogInfo.experience = currentDog[x]
                    } else if (x == 'pic') {
                        dogInfo.pic = currentDog[x]
                    } else if (x == 'profile') {
                        dogInfo.profile = currentDog[x]
                    } else if (x == 'other_dogs') {
                        dogInfo.other_dogs = currentDog[x]
                    } else if (x == 'cats') {
                        dogInfo.cats = currentDog[x]
                    } else if (x == 'exercise') {
                        dogInfo.execise = currentDog[x]
                    } else if (x == 'special') {
                        dogInfo.special = currentDog[x]
                    } else if (x == 'children') {
                        dogInfo.children = currentDog[x]
                    } else if (x == 'size') {
                        dogInfo.size = currentDog[x]
                    } else if (x == 'fur') {
                        dogInfo.fur = currentDog[x]
                    } else if (x == 'food') {
                        dogInfo.food = currentDog[x]
                    } else if (x == 'protective') {
                        dogInfo.protective = currentDog[x]
                    }

                }
                for (var k in dogInfo) {
                    myArr.push(dogInfo[k]);
                    var scores = myArr.slice(8);
                    console.log('---------------------------------------------');
                    //console.log(dogInfo);
                    //console.log(myArr)

                }
                console.log(scores);

                for (var i = 0; i < data.length; i++) {
                    //console.log(data[i].dataValues);
                    // create object to store best match
                    var bestMatch = {
                        name: "",
                        breed: "",
                        age: "",
                        gender: "",
                        pic: "",
                        profile: "",
                        dogDifference: 1000
                    }
                    // holds the user posted data
                    var userData = req.body;
                    var adopterScores = userData.scores;

                    // this variable will measure the score difference between the 2 objects... 
                    // ...being compared, lower score is better.
                    var totalDifference = 0;
                    var surveyDifference = 0;

                    // will loop through each friend in the array
                    for (i = 0; i < myArr.length; i++) {

                        totalDifference = 0;

                        // next loop through each score in myArr[i], and com pare them...
                        // to userData scores and calc the absolute difference.
                        for (x = 0; x < myArr[i].scores.length; x++) {

                            // calculate total score
                            totalDifference += Math.abs(parseInt(adopterScores[x]) - parseInt(myArr[i].scores[x]));

                        }

                        // checks if friend[i]'s totalDifference is less than the dogMatch,... 
                        // ...friend difference, if so, it becomes the new best match
                        console.log("Dogs's Name: ", myArr[i].name);

                        if (totalDifference <= dogMatch.matchDifference) {
                            // sets dogMatch variables to best match
                            bestMatch.name = myArr[i].name;
                            bestMatch.breed = myArr[i].breed;
                            bestMatch.age = myArr[i].age;
                            bestMatch.gender = myArr[i].gender;
                            bestMatch.pic = myArr[i].pic;
                            bestMatch.profile = myArr[i].profile;
                            bestMatch.matchDifference = totalDifference;

                            console.log("Your new best fur friend is " + dogMatch.name + "\n");

                        } else {
                            // character is not the best match.
                            console.log(" Nothing to display\n")
                        }


                        myArr.push(userData);
                        console.log(userData);
                        res.json(bestMatch);
                        console.log(bestMatch);
                        //console.log("-----------------------------------------------");

                    }

                };

                res.send("route hit");
            };
        })
    })
}
