import { useState } from 'react'

export const WorkoutForm = () => {
  const initialState = {
    title: '',
    load: '',
    reps: '',
    error: null,
  }

  const [formData, setFormData] = useState(initialState)
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
    }

    if (response.ok) {
      console.log('new workout added', json)
      setFormData(initialState)
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
      />

      <label htmlFor='load'>Load (in lbs):</label>
      <input
        type='number'
        onChange={handleInputChange}
        name='load'
        value={load}
      />

      <label htmlFor='reps'>Reps:</label>
      <input
        type='number'
        onChange={handleInputChange}
        name='reps'
        value={reps}
      />

      <button>Add Workout</button>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}
