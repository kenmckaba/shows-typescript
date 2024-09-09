import { Box, HStack, Select, useColorMode } from '@chakra-ui/react'
import { ChangeEvent } from 'react'

export default function ThemeToggle() {
  const { colorMode, setColorMode } = useColorMode()

  const chooseColorMode = (e: ChangeEvent<HTMLSelectElement>) => {
    setColorMode(e.target.value)
  }

  return (
    <HStack>
      <Box>Theme:</Box>
      <Select value={colorMode} size="xs" onChange={chooseColorMode}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </Select>
    </HStack>
  )
}
