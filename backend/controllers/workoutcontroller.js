const workout=require('../models/workoutschema')
const mongoose=require('mongoose')

//get all workout
const getworkouts=async(req,res)=>{
    const Workouts=await workout.find({}).sort({createdAt:-1})
    res.status(200).json(Workouts)
}   


//get a single workout
const getworkout=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'})
    }

    const Workout = await workout.findById(id)
    if (!Workout) {
        return res.status (404).json ({error: 'No such workout' })
    }
    res.status(200).json(Workout)
}

//create a new workout
const createWorkout=async(req,res)=>{
    const{title,load,reps}=req.body
    //add doc to db
    try{
        const Workout=await workout.create({title,load,reps})
        res.status(200).json(Workout)//status(200) will show, everything is ok.
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

//delete a workout
const deleteworkout=async(req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({err:'No such workout'})
    }


    const Workout=await workout.findOneAndDelete({_id:id})
    if(!Workout){
        return res.status(404).json({err:'No such workout'})
    }
}

//Update a workout 
const updateworkout=async(req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({err:'No such workout'})
    }

    const Workout=await workout.findOneAndUpdate({_id:id},{...req.body
    })
    if(!Workout){
        return res.status(400).json({error:'NO such workout'})
    }
    res.status(200). json(Workout)

}

module.exports={
    getworkouts,
    getworkout,
    createWorkout,
    updateworkout,
    deleteworkout
}