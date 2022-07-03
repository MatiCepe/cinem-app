import { CCol, CContainer, CRow} from "@coreui/react";

import { Movie} from "./Movie"

export const MoviesLanding = (data) => {
  const movies = data.data
  const listMovies = movies.map((movie) =>
    <CCol md="3">
      <Movie key={movie.id.toString()} {...movie} />
    </CCol>
  );
  return (
    <CContainer className="text-center">
      <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }}>
        {listMovies}
      </CRow>
    </CContainer>
  );
}