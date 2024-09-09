import { VStack } from '@chakra-ui/react'
import { Series, Show as TvShow } from '../api/series'
import { Episode } from '../api/tvmaze'
import Show from './Show'

interface ShowListProps {
  series: Series[]
  handleShowClick: (show: TvShow) => void
  handleEpisodesClick: (episodes: Episode[]) => void
}

export default function ShowList({
  series,
  handleShowClick,
  handleEpisodesClick,
}: ShowListProps) {
  return (
    <VStack w="100%" spacing="20px">
      {series.map((series) => (
        <Show
          series={series}
          key={series.show.id}
          handleShowClick={handleShowClick}
          handleEpisodesClick={handleEpisodesClick}
        /> // apparently show.id is not always unique
      ))}
    </VStack>
  )
}
