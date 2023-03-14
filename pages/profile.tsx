import React from 'react';
import { useRouter } from 'next/router';
import {Button, Heading, Container, Avatar} from "@chakra-ui/react";
import {getAuth} from "firebase/auth";
export default function Profile ()  {
    const router = useRouter();
    const auth = getAuth();
    const user = auth.currentUser;

    if(user !== null) {
        const displayName = user.displayName;
        const email = user.email;
        const emailVerified = user.emailVerified;
        const photoURL = user.photoURL;
        const uid = user.uid;
    }


    return (
        <Container maxW="container.xl" centerContent>
            <Heading as="h1" size="2xl" mb="10">Profile</Heading>
            <Avatar size="2xl" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Heading as="h2" size="xl" mb="10">Name: {user?.displayName}</Heading>
            <Heading as="h2" size="xl" mb="10">Email: {user?.email}</Heading>
            <Button onClick={() => router.push('/home')} colorScheme="teal" variant="solid" mb="10">Home</Button>
        </Container>
    )
}