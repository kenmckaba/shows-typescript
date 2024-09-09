import React from 'react'
import {
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import { QuestionIcon } from '@chakra-ui/icons'
import { getEpisodes } from '../api/search-shows'
import { Series, Show as TvShow } from '../api/series'
import { Episode } from '../api/tvmaze'

const episodes = async (
  id: number,
  onEpisodesClick: (episodes: Episode[]) => void,
) => {
  const list = await getEpisodes(id)
  console.log(list)
  onEpisodesClick(list)
}

function image(
  show: TvShow,
  handleClick: React.MouseEventHandler<HTMLImageElement>,
) {
  if (show.image) {
    return (
      <Image
        h="100%"
        src={show.image.medium}
        alt={show.name}
        borderRadius="8px"
        ml="5"
        onClick={handleClick}
      />
    )
  }
  return (
    <Flex h="100%" w="270px" bg="gray.400" borderRadius="8px" ml="5">
      <QuestionIcon color="white" boxSize="8" margin="auto" />
    </Flex>
  )
}

interface ShowProps {
  series: Series
  handleShowClick: (show: TvShow) => void
  handleEpisodesClick: (episodes: Episode[]) => void
}

export default function Show({
  series,
  handleShowClick,
  handleEpisodesClick,
}: ShowProps) {
  const { show } = series

  const cleanSummary = (str: string) => {
    const temp = document.createElement('div')
    temp.innerHTML = str
    return temp.textContent || temp.innerText
  }

  const summary = cleanSummary(show.summary)

  const handleClick = () => {
    handleShowClick(show)
  }

  return (
    <Flex h="15em" w="100%" pos="relative" cursor="pointer">
      <Flex
        bgColor="brand.shade"
        h="80%"
        w="100%"
        pos="absolute"
        top="20px"
        borderRadius="8px"
      />
      <HStack pos="absolute" h="100%">
        {image(show, handleClick)}
        <VStack alignItems="flex-start" h="100%" pl="20px" pt="40px">
          <Heading size="md" onClick={handleClick}>
            {show.name}
          </Heading>
          <Text
            fontSize="12px"
            maxWidth="900px"
            overflow="hidden"
            h="89px"
            onClick={handleClick}
          >
            {summary}
          </Text>
          <Button
            size="sm"
            onClick={() => episodes(show.id, handleEpisodesClick)}
          >
            Show Episodes
          </Button>
        </VStack>
      </HStack>
    </Flex>
  )
}
