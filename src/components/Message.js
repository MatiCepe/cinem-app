import { useMoviesContext } from "../context/MoviesContext"
import { BsFillInfoSquareFill } from "react-icons/bs"
import { FaSearch, FaHotjar} from "react-icons/fa"
import { CCol, CRow } from "@coreui/react"

export const Message = () => {
  const { message, selectedMovie, searching } = useMoviesContext()
return (
  <>
  <div className="mb-3">
  <CRow className="justify-content-md-left m-3 align-items-center">
    <CCol md="auto">
    <h3>
    {(selectedMovie) 
      ? <BsFillInfoSquareFill /> 
      : (searching) 
        ? <FaSearch />
        : <FaHotjar/>}
  </h3>
    </CCol>
    <CCol md="auto">
    <h4>
    {message}
  </h4>
    </CCol>
  </CRow>
  </div>
  
  </>
)
}