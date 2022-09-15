const User = require('../models/User')
const bcrypt = require('bcryptjs')
const salt = 10


const userLogin = (req, res) => {
    User.findOne({username:  req.body.username},  (err, user) => {
        if(err){
            res.status(400).json(err)
            return
        }

        if(!user){
            res.status(400).json({msg: 'Given Username does exist'})
            return
        }
        
        let passwordIsCorrect = bcrypt.compareSync(req.body.password, user.password)

        if(passwordIsCorrect){
            delete user.password
        
            res.json(user)
        }else{
            res.status(204).json({msg: "Incorrect password"})
        }

    })
}

const userRegister = (req, res) => {
    bcrypt.hash(req.body.password, salt, (err, hash) => {
        User.create({ ...req.body, password:hash })
        .then(userData => {
        res.send(userData)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err.msg)
    })
    })
    
}


module.exports = {
    userLogin,
    userRegister
}



// const passport = require("passport");
// const bcrypt = require('bcryptjs')
// const User = require('../models/User')

// const userLogin = (req, res, next) => {
//     passport.authenticate("local", (err, user, info) => {
//       if (err) throw err;
//       if (!user) res.send("No User Exists");
//       else {
//         req.logIn(user, (err) => {
//           if (err) throw err;
//           res.send("Successfully Authenticated");
//           console.log(req.user);
//         });
//       }
//     })(req, res, next);
// }

// const userRegister = (req, res) => {
//     User.findOne({ username: req.body.username }, async (err, doc) => {
//       if (err) throw err;
//       if (doc) res.send("User Already Exists");
//       if (!doc) {
//         const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
//         const newUser = new User({
//           username: req.body.username,
//           password: hashedPassword,
//         });
//         await newUser.save();
//         res.send("User Created");
//       }
//     });
// }
  
// const userCreated = (req, res) => {
//     res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
//   }
  
// module.exports = {
//     userLogin,
//     userRegister,
//     userCreated
// }