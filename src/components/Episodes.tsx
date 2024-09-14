import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tooltip,
  TableColumnHeaderProps,
  TableCellProps,
} from '@chakra-ui/react'
import { type Episode } from '../api/tvmaze'

const ThShort = (props: TableColumnHeaderProps) => <Th {...props} padding={1} />
const TdShort = (props: TableCellProps) => <Td {...props} padding={1} />

interface EpisodesProps {
  episodes: Episode[]
}

const Episodes = ({ episodes }: EpisodesProps): JSX.Element => {
  return (
    <Box>
      <Table variant="striped">
        <Thead>
          <Tr>
            <ThShort textAlign="center">Season</ThShort>
            <ThShort textAlign="center">Number</ThShort>
            <ThShort>Title</ThShort>
          </Tr>
        </Thead>
        <Tbody>
          {episodes.map((episode: Episode) => {
            const tt = `Season: ${episode.season}, Episode: ${episode.number}, Air Date: ${episode.airdate}`
            return (
              <Tooltip label={tt}>
                <Tr key={episode.id}>
                  <TdShort textAlign="center">{episode.season}</TdShort>
                  <TdShort textAlign="center">{episode.number}</TdShort>
                  <TdShort>{episode.name}</TdShort>
                </Tr>
              </Tooltip>
            )
          })}
        </Tbody>
      </Table>
    </Box>
  )
}

export default Episodes
