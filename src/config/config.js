export const credenciales = {
  Dominio : "https://api.themoviedb.org/3",
  api_key : '7682be2bc8dae6654d1631291f736428'
}

export const config = { 
  urls: {
      discoverLanding: `${credenciales.Dominio}/discover/movie?api_key=${credenciales.api_key}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
      searchMovie: `${credenciales.Dominio}/search/movie?api_key=${credenciales.api_key}&page=1&include_adult=false`,
      genres: `${credenciales.Dominio}/genre/movie/list?api_key=${credenciales.api_key}&language=en-US`,
      movie: `${credenciales.Dominio}/movie/`
  }
}

