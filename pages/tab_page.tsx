import {
    Tab,
    Tabs,
    TabList,
} from '@chakra-ui/react'
import Link from "next/link";

export default function TabPage() {
    return (
        <Tabs variant="with-border" colorScheme={"green"}>
            <TabList>
                <Link href={"/home"}>
                    <Tab>Home</Tab>
                </Link>
                <Link href={"/gallery"}>
                    <Tab>Gallery</Tab>
                </Link>
                <Link href={"/profile"}>
                    <Tab>Profile</Tab>
                </Link>
            </TabList>
        </Tabs>
    )
}

