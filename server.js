const express = require("express")
const app = express()

app.set("view engine", "ejs")
app.use(logger)
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
// app.use(express(json))
// app.get('/',(req,res)=>{
//     console.log("Hello");
//     // res.send("Hi")
//     res.render("index",{text2323: "World"})
// })


function logger(req,res,next){
    console.log(req.originalUrl);
    next()
}

const userRouter = require('./routes/users')

app.use('/users', userRouter)

app.listen(3000)