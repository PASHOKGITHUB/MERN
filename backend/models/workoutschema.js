const mongoose=require('mongoose')

const Schema=mongoose.Schema


//schema defines the structure of the document in the database.
const workoutschema=new Schema({
    title:{
        type:String,
        required:true
    },
    reps:{
        type:String,
        required:true
    },
    load:{
        type:String,
        require:true
    }

},{timestamps:true}) // 2nd argument defines the timestamp.


//Model applies the schema to the particular model, 
//and use the model to interact with the collection of that name
module.exports=new mongoose.model('workout',workoutschema)
