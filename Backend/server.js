const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const { debug } = require("./middlewares/debug")
const router = express.Router()

const { port, mongoURL } = require('./utils/config')

const authRoutes = require("./routes/authRoutes")
const usersRoutes = require("./routes/userRoutes")



mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const app = express()
app.use(cors())
app.use(express.json())
app.use(debug)


app.use("/", router)
app.use("/user", authRoutes)
app.use("/users", usersRoutes)



app.listen(port, () => {
    console.log("Server is listening at port ", port);
})