import 'dotenv/config'

import express from 'express'
import mongoose from 'mongoose'
import workoutRoutes from './routes/workouts.js'
import chalk from 'chalk'

//  chalk color variables
const blue = chalk.rgb(0, 100, 200)
const pink = chalk.rgb(200, 0, 110);
const orange = chalk.rgb(255, 136, 0)

const PORT = process.env.PORT

//  express app
const app = express()

//  middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(pink(req.path), blue(req.method))
    next()
})

//  routes
app.use('/api/workouts', workoutRoutes)

//  connect to DB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
//  listen for requests
app.listen(PORT || 4000, () => {
  console.log(orange.inverse.bold(`listening on port ${PORT}, connected to mongoDB`))
})
})
.catch(error => console.log(error))



