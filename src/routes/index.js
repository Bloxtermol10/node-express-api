const {Router} = require("express")

const router = Router()

router.get("/users", (req, res) => {
    const response = {
        "users": [
          {
            "id": 1,
            "username": "johndoe",
            "email": "john.doe@example.com",
            "first_name": "John",
            "last_name": "Doe",
            "age": 35,
            "gender": "male",
            "city": "New York",
            "country": "USA",
            "interests": ["hiking", "photography", "reading"]
          },
     
        ]
      }
      
       
    res.json({response})
});

router.post("/users", (req, res) => {
    console.log(req.body)
    res.json({"msg" : "recibido"})
});

module.exports = router;