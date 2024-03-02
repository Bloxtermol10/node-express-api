const {Router} = require("express")
const jwt = require("jsonwebtoken");
const { token } = require("morgan");

const router = Router()

const secretKey = process.env.SECRET_KEY || "secret"
router.post("/api/login", (req, res) => {
    const user=
        {
          "id": 1,
          "username": "johndoe",
          "email": "john.doe@example.com",
          "password" : "123456",
          "first_name": "John",
          "last_name": "Doe",
          "age": 35,
          "gender": "male",
          "city": "New York",
          "country": "USA",
          "interests": ["hiking", "photography", "reading"]
        }



    const {email, password} = req.body;
    console.log(email)
    console.log(password)

if(email === user.email && password === user.password){
    jwt.sign({user: user}, secretKey,(error, token) => {
        res.json({token})
    })
}else{
    res.json({message : "Email or password invalid"})
}

});


module.exports = router