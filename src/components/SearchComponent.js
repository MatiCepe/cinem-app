import { CButton, CContainer, CFormInput, CCol, CRow } from "@coreui/react"
import { useEffect, useState } from "react"
import { useMoviesContext } from "../context/MoviesContext"
import { searchMovie } from "../helpers/moviesData"
import { Rating } from "./Rating"

export const SearchComponent = () => {

  const { rating,selectedMovie, setSelectedMovie, popularMovies, setPopularMovies, setFilteredMovies, setSearching, setMessage } = useMoviesContext([])
  const [movieToSearch, setMovieToSearch] = useState('')

  useEffect(() => {
    if (movieToSearch.length > 2) {
      const getSearchMovies = async () => {
        const response = await searchMovie(movieToSearch)
        if (response) {
            let filteredByRating = response.results.filter(x =>( x.vote_average >= rating[0] & x.vote_average <= rating[1]))
            filteredByRating.sort(function(a, b ) { return b.vote_average -a.vote_average })
            setFilteredMovies([...filteredByRating])
            setSelectedMovie(undefined)
            setSearching(true)
            setMessage('Search Results')
        }
      }
      getSearchMovies()
    }
    else {
      if (movieToSearch.length > 0){
      setFilteredMovies([])
      setSearching(true)
      setMessage('You need to write at least 3 letters to get movies')
    }
    }
  }, [rating, movieToSearch]);


  return (
    <CContainer md={12}>
      <CRow md={12} className="align-items-center mb-3 justify-content-center">
        <CCol md={10}>
          <CFormInput
            className=""
            floatingLabel="Movie Name (more than two letters)"
            placeholder="Movie Name (more than two letters)"
            onChange={e => setMovieToSearch(e.target.value)}
            value={movieToSearch} />
        </CCol>
        <CCol md={2}>
          <Rating />
        </CCol>
      </CRow>
    </CContainer>
  )
}