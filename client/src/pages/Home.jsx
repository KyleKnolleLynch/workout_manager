import { useEffect, useState } from 'react'
import { WorkoutDetails } from '../components'

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
        <ul role='list'>
          {workoutData?.map(workout => (
            <WorkoutDetails key={workout._id} {...workout} />
          ))}
        </ul>
      </section>
    </main>
  )
}
