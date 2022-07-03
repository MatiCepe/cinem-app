import React, { useContext, useEffect, useState } from "react";
import { getGenres } from "../helpers/moviesData";

const MoviesContext = React.createContext([])
export const useMoviesContext = () => useContext(MoviesContext)

function MoviesProvider({ children }) {

  const [popularMovies, setPopularMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState()
  const [filteredMovies, setFilteredMovies] = useState([])
  const [genres,setGenres] = useState([])
  const [rating, setRating] = useState([0,5])
  const [searching, setSearching] = useState(false)
  const [message, setMessage] = useState('Suggested movies')

  function setMovie(data){
    setSelectedMovie(data)
  }

  useEffect(() => {
    const getAllGenres = async () => {
      let response = await getGenres()
      if (response)
        (response.genres.length > 0) && setGenres([...response.genres])
    }
    getAllGenres()
  },[])

  const value = {
    popularMovies,
    setPopularMovies,
    selectedMovie,
    setSelectedMovie,
    setMovie,
    genres,
    rating,
    setRating,
    filteredMovies, 
    setFilteredMovies,
    searching, setSearching,
    message, setMessage
  }

  return <MoviesContext.Provider value={value} >
    {children}
  </MoviesContext.Provider>

};
export default MoviesProvider