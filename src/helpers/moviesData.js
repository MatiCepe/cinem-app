import { config } from "../config/config";

export const discoverMoviesOnLanding = async (rating) => {
  const response = await fetch(`${config.urls.discoverLanding}`)
  const data = await response.json();
  return data

}

export const searchMovie = async (query) => {
  const response = await fetch(`${config.urls.searchMovie}`+'&query='+`${query}`)
  const data = await response.json();
  return data
  

}

export const getGenres = async () => {
  const response = await fetch(`${config.urls.genres}`)
  const data = await response.json();
  return data
}
