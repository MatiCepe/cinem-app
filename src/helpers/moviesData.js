import { config, credenciales } from "../config/config";

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

export const fullCreditsData = async (id) => {
  const response = await fetch(`${config.urls.movie}${id}/credits?api_key=${credenciales.api_key}`)
  const data = await response.json();
  return data

}