import movieData from '../movie-data.json'
import { getLocalStorageKey, setLocalStorageKey, deleteLocalStorageKey } from './localStorage.js'

if (!getLocalStorageKey('movies')) {
  setLocalStorageKey('movies', movieData)
}


const makeMovieCard = (movie) => {
  const { criticScore, audienceScore, domestic, genre, title } = movie
  console.log(criticScore, audienceScore, domestic, genre, title)
  const li = document.createElement('li')
  const movieTitle = document.createElement('h3')
  const movieInfo = document.createElement('div')
  const criticScoreLine = document.createElement('p')
  const audienceScoreLine = document.createElement('p')
  const domesticTotal = document.createElement('p')
  const genreLine = document.createElement('p')

  li.classList.add('movie')

  movieInfo.append(criticScoreLine, audienceScoreLine, domesticTotal, genreLine)
  li.append(movieTitle, movieInfo)

  movieTitle.textContent = title;
  criticScoreLine.textContent = `Critic Score: ${criticScore}`
  audienceScoreLine.textContent = `Audience Score: ${audienceScore}`
  domesticTotal.textContent = `Domestic Total: $${domestic}`
  genreLine.textContent = `Genre: ${genre}`

  document.querySelector('#movie-list').append(li)
}

const initMovieCards = () => {
  getLocalStorageKey('movies').forEach(makeMovieCard)
}

initMovieCards()