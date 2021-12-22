const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const { port, mongoURL } = require('./utils/config')


mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const app = express()
app.use(express.json())


app.use("/", router)

app.listen(port, () => {
    console.log("Server is listening at port ", port);
})