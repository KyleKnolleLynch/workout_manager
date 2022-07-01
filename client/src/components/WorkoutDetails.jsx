import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { FeatherTrash } from '../assets/svgIcons'

export const WorkoutDetails = ({ _id, title, reps, load, createdAt }) => {
  const { dispatch } = useWorkoutsContext()
  const formattedDate = new Date(createdAt).toLocaleDateString()

  const handleClick = async () => {
    const response = await fetch(`/api/workouts/${_id}`, {
      method: 'DELETE',
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: json })
    }
  }

  return (
    <article className='workout-details'>
      <h2>{title}</h2>
      <p>
        <strong>Load (lbs): </strong>
        {load}
      </p>
      <p>
        <strong>Reps: </strong>
        {reps}
      </p>
      <p>
       <small>Added: </small><time dateTime={createdAt}>{formattedDate}</time>
      </p>
      <button onClick={handleClick}>
        <FeatherTrash />
      </button>
    </article>
  )
}
