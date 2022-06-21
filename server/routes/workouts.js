import express from 'express'
import { getWorkouts, getWorkout, createWorkout } from '../controllers/workoutController.js'

const router = express.Router()

//  GET all workouts
router.get('/', getWorkouts)

//    GET a single workout
router.get('/:id', getWorkout)

//  POST a new workout
router.post('/', createWorkout)

//  DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({ mssg: 'DELETE a new workout' })
})

//  UPDATE a workout
router.patch('/:id', (req, res) => {
  res.json({ mssg: 'UPDATE a new workout' })
})

export default router
