import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

export const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()

  const initialState = {
    title: '',
    load: '',
    reps: '',
    error: null,
  }

  const [formData, setFormData] = useState(initialState)
  const [emptyFields, setEmptyFields] = useState([])

  const { title, load, reps, error } = formData

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData(state => ({ ...state, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const json = await response.json()

    if (!response.ok) {
      setFormData(state => ({ ...state, error: json.error }))
      setEmptyFields(json.emptyFields)
    }

    if (response.ok) {
      console.log('new workout added', json)
      dispatch({type: 'CREATE_WORKOUT', payload: json})
      setFormData(initialState)
      setEmptyFields([])
    }
  }

  return (
    <form className='create-form' onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label htmlFor='title'>Excersize Title:</label>
      <input
        type='text'
        onChange={handleInputChange}
        name='title'
        value={title}
        className={emptyFields.includes('title') ? 'error' : '' }
      />

      <label htmlFor='load'>Load (in lbs):</label>
      <input
        type='number'
        onChange={handleInputChange}
        name='load'
        value={load}
        className={emptyFields.includes('load') ? 'error' : '' }
      />

      <label htmlFor='reps'>Reps:</label>
      <input
        type='number'
        onChange={handleInputChange}
        name='reps'
        value={reps}
        className={emptyFields.includes('reps') ? 'error' : '' }
      />

      <button>Add Workout</button>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}
