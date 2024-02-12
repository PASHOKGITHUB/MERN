const express=require('express')
const {
    getworkouts,
    getworkout,
    createWorkout,
    deleteworkout,
    updateworkout
}=require('../controllers/workoutcontroller')


const router=express.Router()

//Get all workouts
router.get('/', getworkouts)

//get a single workout
router.get('/:id',getworkout)

//post a new workout
router.post('/',createWorkout)

//delete a workout
router.delete('/:id',deleteworkout)

//update a workout
router.patch('/:id',updateworkout)

module.exports=router