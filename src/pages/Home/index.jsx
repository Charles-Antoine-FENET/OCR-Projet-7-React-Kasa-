import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>
      <h1>Kasa</h1>
      <nav>
        <Link to="/Accommodation">Logement</Link>
        <Link to="/About">A Propos</Link>
      </nav>
    </div>
  )
}

export default Home
