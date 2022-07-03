import { CBadge, CCard, CCardBody, CCardFooter, CCardHeader, CCardImage, CCardText, CCol, CRow } from "@coreui/react";
import { useEffect, useState } from "react";
import { useMoviesContext } from "../context/MoviesContext";


export const MovieDetails = (data) => {
  
  let src = 'https://image.tmdb.org/t/p/original' + data.poster_path
  const { genres } = useMoviesContext()
  const [thisGenres, setThisGenres] = useState('')
  let date = data.release_date.split('-')
  let newDate = date[2] + "-" + date[1] + "-" + date[0]
  useEffect(() => {
    let fullGenre = ''
    data.genre_ids.forEach(function (x) {
      fullGenre += " - " + genres.filter(y => y.id == x)[0].name

    })
    setThisGenres(fullGenre)
  }, [])

  return (
    <CCol md={12} >
      <CCard
        textColor="white"
        className='h-100 back-movie-style'>
        <CCardHeader className="text-style"><h4>{data.title}</h4></CCardHeader>
        <CCardBody>
          <CRow md={12}>
            <CCol md={6}>
              <CCardImage orientation="top" src={src} />
            </CCol>
            <CCol md={6} className="text-style text-start">
              <CCardText className="lead">
                {data.overview}
              </CCardText>
              <CCardText>
                Release Date: {newDate}
              </CCardText>
              <CCardText>
                Genre: {thisGenres}
              </CCardText>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardFooter className="text-style text-center">
          <h3>
            <span className="text-style ">
              Average:
              <CBadge className="border border-light p-2 m-2" color="secondary">
                {data.vote_average}
              </CBadge>
            </span>
          </h3>
        </CCardFooter>
      </CCard>
    </CCol>
  )

}

