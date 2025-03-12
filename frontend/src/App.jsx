import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import MoviesList from './component/MoviesList'



function App() {
  const [movies, setMovies] = useState([])
  async function getMovies() {
    const res = await fetch(`/api/movies`)
    const data = await res.json()
    setMovies(data)
  }

  useEffect(()=>{
    getMovies();
  }, []);

  return (
    <>
      <MoviesList moviesProp={movies}/>
    </>
  )
}



export default App
