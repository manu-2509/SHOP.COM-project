const express = require('express')
const cors = require('cors')
const connect = require('./configs/db')
const {register,login} = require('./controllers/auth.controllers')
const userController = require('./controllers/user.controllers')
const plantController = require('./controllers/plants.controllers')
const app = express()

app.use(express.json())

app.use(cors())

app.post("/register", register)
app.post("/login", login)


app.use("/user",userController)

app.use("/plants",plantController)


app.listen(3000,async()=>{
try {

    await connect()
    console.log("Listening to port 3000");
} catch (err) {
    console.log("Something went wrong");
}
})

