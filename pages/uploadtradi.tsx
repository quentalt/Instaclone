import React, {ChangeEvent, useState} from 'react';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import {getFirestore, collection, addDoc, serverTimestamp} from 'firebase/firestore';
import {Button, CloseButton, Input, Progress} from "@chakra-ui/react";
import Image from "next/image";

const storage = getStorage();
const db = getFirestore();

const imagesCollection = collection(db, 'images');

export default function UploadTradi() {
    const [file, setFile] = useState<Blob | Uint8Array | ArrayBuffer>();
    const [fileName, setFileName] = useState('');
    const [progress, setProgress] = useState(0);
    const [preview, setPreview] = useState('');


    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.item(0);
        if (file) {
            setFile(file);
            setFileName(file.name);
            // lire le contenu du fichier pour afficher une preview
            const reader = new FileReader();
            reader.onload = (e) => {
                const image = e.target?.result;
                setPreview(image as string);
            };
            reader.readAsDataURL(file);
        }
    }

    const handleUpload = async (file: Blob | Uint8Array | ArrayBuffer | undefined) => {
        try {
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytes(storageRef, file as Blob);
            uploadTask.catch((error) => {
                console.error('Error uploading file: ', error);
            });


            //create collection in firestore "images" with userId, fileName, createdAt

            const docRef = await addDoc(imagesCollection, {
                userId: '1',
                fileName,
                createdAt: serverTimestamp(),
            });
            console.log('Image uploaded with ID: ', docRef.id);
        } catch (error) {
            console.error('Error uploading image: ', error);
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            setFile(file);
            setFileName(file.name);
        }
    }

    const handleDelete = () => {
        setFile(undefined);
        setFileName('');
    };


    return (
        <div>
            <Input type="file" onChange={handleFileChange} />
            <Button onClick={() => handleUpload(file)}>Upload</Button>
            {file && (
                <div>
                    <CloseButton size="sm" onClick={handleDelete} />
                    <Image src={URL.createObjectURL(file as Blob)} width={300} height={300} alt={fileName} />
                </div>
            )}
            <div onDragOver={handleDragOver} onDrop={handleDrop}>
                <Image src= "/public/dropzone.jpg" width={300} height={300}  alt="dropzone"/>
            </div>
            <Progress value={progress} />
        </div>
    )
}