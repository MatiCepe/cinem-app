import { CContainer } from "@coreui/react"
import { useEffect, useState } from "react"
import { useMoviesContext } from "../context/MoviesContext"
import { discoverMoviesOnLanding, searchMovie } from "../helpers/moviesData"
import { Message } from "./Message"
import { MovieDetails } from "./MovieDetails"
import { MoviesLanding } from "./MoviesLanding"
import { SearchComponent } from "./SearchComponent"

export const Landing = () => {
  const { popularMovies, setPopularMovies, selectedMovie, rating, filteredMovies, setFilteredMovies, searching, message } = useMoviesContext([])

  useEffect(() => {
    if (filteredMovies.length > 0 || searching) {
      setPopularMovies([...filteredMovies])
    }
    else {
      const getLandingMovies = async () => {
        let response = await discoverMoviesOnLanding(rating)
        if (response) {
          (response.results.length > 0) && setPopularMovies([...response.results])
        }
      }
      getLandingMovies()
    }
  }, [rating, filteredMovies, searching])

  return (
    <>
      <CContainer className="text-center mt-3">
        <SearchComponent />
        <Message />
        {selectedMovie !== undefined
          ? <MovieDetails {...selectedMovie} />
          : { popularMovies } && <MoviesLanding data={[...popularMovies]} />
        }
      </CContainer>
    </>
  )
}