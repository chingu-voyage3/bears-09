import axios from 'axios'

export const FETCH_PODCASTS = 'FETCH_PODCASTS'

export function fetchPodcasts(term) {
  const req = axios.get(`https://itunes.apple.com/search?media=podcast&term=${term}`)

  return {
    type: FETCH_PODCASTS,
    payload: req
  }
}