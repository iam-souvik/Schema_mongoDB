
require("dotenv").config();
const express = require("express");
const cors = require("cors")
const connect = require("./config/db")
const BlogRoute = require("./Blog/blog.route")
const UsrsRoute = require("./Users/user.route")

const PORT = process.env.PORT;
const app = express()
app.use(express.json())
app.use(cors())
app.use("/blogs",BlogRoute)
app.use("/users",UsrsRoute)



app.listen(PORT, async() =>{
    await connect()
    console.log(`server start on http://localhost:${PORT}`)
})