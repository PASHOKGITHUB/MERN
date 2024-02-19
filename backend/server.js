require('dotenv').config()
const mongoose = require('mongoose')
const express=require('express')
const workoutRoute=require('./routes/workouts')

//express app
const app= express()

//global middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next() // this will push to the next action
})

//routes
// app.get('/',(req,res)=>{
//     res.json({mssg:"Welcome to the app"})
// })
app.use('/api/workouts', workoutRoute)

//DB connection
mongoose.connect(process.env.MONG_URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('listening on port',process.env.PORT);
    })
}).catch((err)=>{
    console.log(err);
})

app.get("/",(req,res)=>{
    res.send("<h1>SERVER UP</h1>")
})

//listen for requests
