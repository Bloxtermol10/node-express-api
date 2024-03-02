const express = require("express");
const morgan = require("morgan");

const app = express()

//Global
app.set("port",process.env.PORT || 3000 )

// Configuraciones
app.use(morgan("dev"))
app.use(express.json()) // express soporte json

//Endpoint
app.use(require("./routes/index"))
app.use(require("./routes/auth"))

// Server
app.listen(app.get("port") , ()=>{
    console.log(`Server is runnig at port ${app.get("port")}`)
})