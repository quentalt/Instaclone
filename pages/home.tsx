import { Box, Flex, Heading, Button, Text } from '@chakra-ui/react'

function Home() {
    return (
        <Box p="10">
            <Flex direction="column" align="center" justify="center" height="100vh">
                <Heading mb="6" fontSize="6xl">Bienvenue sur mon site</Heading>
                <Text fontSize="xl" mb="10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nibh vel turpis aliquet iaculis sit amet et mi.
                </Text>
                <Button colorScheme="blue" size="lg">
                    Découvrez notre contenu
                </Button>
            </Flex>
        </Box>
    )
}

export default Home
