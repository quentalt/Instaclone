import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import React, {useState} from "react";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import PhotoAlbum from "react-photo-album";
import {Container} from "@chakra-ui/react";
import UploadTradi from "@/pages/uploadtradi";
import TabPage from "@/pages/tab_page";
import Photos from "./photos";

const slides = Photos();
export default function MasonryImageList() {
    const [index, setIndex] = useState(-1);

    return (
        <>
            <TabPage/>
            <Container maxW="container.xl" m={6}>
                <UploadTradi/>
                <PhotoAlbum
                    photos={slides}
                    onClick={(e: any, {index}: any) => setIndex(index)}
                />


                <Lightbox
                    slides={slides}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    // enable optional lightbox plugins
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                />
            </Container>


        </>
    );
}

