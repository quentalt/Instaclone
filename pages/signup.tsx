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
} from '@chakra-ui/react';
import signUp from "@/firebase/auth/signup";
import ReactImagePickerEditor, { ImagePickerConf } from 'react-image-picker-editor';
import 'react-image-picker-editor/dist/index.css'

export default function Signup() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [username, setUserName] = useState('');
    const [imageSrc, setImageSrc] = useState<string | null | undefined>('');

//image picker

    const config2: ImagePickerConf = {
        borderRadius: '9000px',
        language: 'en',
        width: '330px',
        height: '250px',
        objectFit: 'contain',
        compressInitial: null,
    };

    const initialImage = '';





//submit form
    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setIsLoading(true);
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setIsLoading(false);
            return;
        }

        try {
            const result = await signUp(email,username, password);
               console.log(result);
            await router.push('/signin');
        } catch (error) {
            return console.log(error);
        }
    };

    return (
        <Stack spacing={4} mx="auto" maxW="lg" py={12} px={6}>

            <ReactImagePickerEditor
                config={config2}
                imageSrcProp={initialImage}
                imageChanged={(newDataUri: any) => { setImageSrc(newDataUri) }} />
            {imageSrc && (
                <img
                    src={imageSrc}
                    alt="example"
                    style={{
                        maxHeight: '900px',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        background: 'black',
                    }}
                />
            )}
            <Heading textAlign="center">Sign Up</Heading>
            <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl id="username">
                <FormLabel>Email</FormLabel>
                <Input
                    type="text"
                    placeholder="Enter your username"
                    value={email}
                    onChange={(e) => setUserName(e.target.value)}
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
            <FormControl id="confirm-password" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </FormControl>
            <Button
                mt={4}
                colorScheme="teal"
                isLoading={isLoading}
                loadingText="Signing up"
                onClick={handleSubmit}
            >
                Sign Up
            </Button>
            {error && <FormErrorMessage>{error}</FormErrorMessage>}
        </Stack>
    );
}

