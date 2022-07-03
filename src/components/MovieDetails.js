import { CBadge, CCard, CCardBody, CCardFooter, CCardHeader, CCardImage, CCardText, CCol, CRow } from "@coreui/react";
import { useEffect, useState } from "react";
import { useMoviesContext } from "../context/MoviesContext";
import { fullCreditsData, fullMovieData } from "../helpers/moviesData";


export const MovieDetails = (data) => {

  let src = 'https://image.tmdb.org/t/p/original' + data.poster_path
  const { genres } = useMoviesContext()
  const [thisGenres, setThisGenres] = useState([])
  const [cast, setCast] = useState([])

  const castList = cast.map((member) =>
    <li>{member}</li>
  );

  const genresList = thisGenres.map((gen) =>
    <li>{gen}</li>
  );
 
  let date = data.release_date.split('-')
  let newDate = date[2] + "-" + date[1] + "-" + date[0]
  useEffect(() => {
    let fullGenre = []
    data.genre_ids.forEach(function (x) {
      fullGenre.push(genres.filter(y => y.id == x)[0].name)
    })
    setThisGenres(fullGenre)
  }, [])
  useEffect(() => {
    const getFullDataMovie = async () => {
      let response = await fullCreditsData(data.id)
      if (response) {
        let actors = []
        for (let i = 0; i < 5; i++) {
          actors.push(response.cast[i].name)
        }
        setCast(actors)
      }
    }
    getFullDataMovie()
  }, [data])



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
                Genre: {<ul>{genresList}</ul>}
              </CCardText>
              <CCardText>
                Main Cast: {(cast.length > 0) && <ul>{castList}</ul>}
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

