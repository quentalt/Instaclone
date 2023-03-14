import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Stack,
    Icon,
    Text
} from '@chakra-ui/react';
import signIn from "@/pages/signIn/signin";
import {ArrowBackIcon} from "@chakra-ui/icons";
export default function Signin() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setIsLoading(true);
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setIsLoading(false);
            return;
        }

        const { error } = await signIn(email, password)

        if (error) {
           return console.log(error);
        }


        await router.push('/home');
    };

    return (
        <Stack spacing={4} mx="auto" maxW="lg" py={12} px={6}>
            <Heading textAlign="center">Sign In</Heading>
            <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </FormControl>
            <FormControl id="confirmPassword" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </FormControl>
            <Button
                colorScheme="blue"
                type="submit"
                onClick={handleSubmit}
                isLoading={isLoading}
                loadingText="Signing up..."
            >
                Sign In
            </Button>
            <Text textAlign="center">
                <Icon as={ArrowBackIcon} mr={2} />
                <Button
                    variant="link"
                    onClick={() => router.push('/signup')}
                >
                    Sign Up
                </Button>
            </Text>

            {error && (
                <FormControl isInvalid>
                    <FormErrorMessage textAlign="center" mt={4}>
                        {error}
                    </FormErrorMessage>
                </FormControl>
            )}
        </Stack>
    );
}
