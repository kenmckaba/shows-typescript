import {
  ChakraProvider,
  ColorModeScript,
  Text,
  theme,
  VStack,
} from '@chakra-ui/react'
import Header from './components/Header'
import SearchBox from './components/SearchBox'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <VStack id="id1" marginTop="10" width="100vw">
        <Text>xxx</Text>
        <Header />
        <Text>asfdasdfafsd</Text>
        <SearchBox />
      </VStack>
    </ChakraProvider>
  )
}

export default App
