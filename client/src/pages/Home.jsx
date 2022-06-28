import { useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

//  components
import { WorkoutDetails, WorkoutForm } from '../components'

export const Home = () => {
  const {workouts, dispatch} = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const data = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: data})
      }
    }

    fetchWorkouts()
  }, [])

  return (
    <main className='home'>
      <section className='workouts'>
        {workouts?.map(workout => (
          <WorkoutDetails key={workout._id} {...workout} />
        ))}
      </section>
      <WorkoutForm />
    </main>
  )
}
