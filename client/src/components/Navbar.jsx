import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header>
      <nav aria-label='Main'>
        <Link to='/'>
          <h1>Workout Manager</h1>
        </Link>
      </nav>
    </header>
  )
}
