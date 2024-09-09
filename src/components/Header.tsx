import { Box, VStack } from '@chakra-ui/react'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <Box>
      <VStack alignItems="center" justifyContent="space-between">
        <Box>Show Finder</Box>
        <ThemeToggle />
      </VStack>
    </Box>
  )
}
