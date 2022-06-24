export const WorkoutDetails = ({ title, reps, load, createdAt }) => {
    const formattedDate = new Date(createdAt).toLocaleDateString()

  return (
    <li className='workout-details'>
      <h2>{title}</h2>
      <p>
        <strong>Load (lbs): </strong>
        {load}
      </p>
      <p>
        <strong>Reps: </strong>
        {reps}
      </p>
      <p><time datetime={createdAt}>{formattedDate}</time></p>
    </li>
  )
}
