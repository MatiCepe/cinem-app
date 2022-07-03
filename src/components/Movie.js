import { CCard, CCardBody, CCardImage, CCardTitle, CCardFooter, CTooltip, CBadge } from "@coreui/react";
import { useMoviesContext } from "../context/MoviesContext";
import { BiCameraMovie } from "react-icons/bi"

export const Movie = (data) => {

  const {setSelectedMovie, setMovie, setMessage} = useMoviesContext()
  let src = 'https://image.tmdb.org/t/p/original' + data.poster_path
  let alt = "slide " + data.key

  const setSelected = () => {
    setMovie(data)
    setMessage('Movie info')
  }
  
  return (
   
      <CTooltip
        content={"Overview: " + data.overview}
        placement="auto">
        <CCard
          onClick={()=>setSelected()}
          textColor="white"
          className="h-100 back-movie-style"
          style={{cursor:"pointer"}}>

          <CCardImage orientation="top" src={src} />
          <CCardBody>
            
            <CCardTitle className="text-style">{data.title}</CCardTitle>
          </CCardBody>
          <CCardFooter>
            <BiCameraMovie size={20}/>
            <span className="text-style m-2">Average: <CBadge className="border border-light p-2" color="secondary">{data.vote_average}</CBadge></span>
          </CCardFooter>
        </CCard>
      </CTooltip>

  )
}