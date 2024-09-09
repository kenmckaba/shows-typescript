// import { Episode, ShowScore } from './tvmaze'

import { Series } from './series'
import { Episode } from './tvmaze'

async function searchShows(term: string): Promise<Series[]> {
  const url = `https://api.tvmaze.com/search/shows?q=${term}`
  const apiResult = await fetch(url)
  const result = await apiResult.json()
  return result
}

async function getEpisodes(showId: number): Promise<Episode[]> {
  const url = `https://api.tvmaze.com/shows/${showId}/episodes`
  const apiResult = await fetch(url)
  const result = await apiResult.json()
  return result
}

export { searchShows, getEpisodes }
