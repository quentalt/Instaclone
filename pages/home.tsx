import {
    Box,
    Flex,
    Heading,
    Text,
} from '@chakra-ui/react'
import TabPage from "@/pages/tab_page";

export default function Home() {
    return (
        <>
            <TabPage/>
            <Box p="10">
            <Flex direction="column" align="center" justify="center" height="100vh">
                <Heading mb="6" fontSize="6xl">Bienvenue sur mon site</Heading>
                <Text fontSize="xl" mb="10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nibh vel turpis aliquet iaculis
                    sit amet et mi.
                </Text>
            </Flex>
        </Box>
        </>
    )
}

