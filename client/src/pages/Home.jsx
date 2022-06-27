import { useEffect, useState } from 'react'
import { WorkoutDetails, WorkoutForm } from '../components'

export const Home = () => {
  const [workoutData, setWorkoutData] = useState(null)

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const data = await response.json()

      if (response.ok) {
        setWorkoutData(data)
      }
    }

    fetchWorkouts()
  }, [])

  return (
    <main className='home'>
      <section className='workouts'>
        {workoutData?.map(workout => (
          <WorkoutDetails key={workout._id} {...workout} />
        ))}
      </section>
      <WorkoutForm />
    </main>
  )
}
