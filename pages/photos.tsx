import {getFirestore, collection, getDocs, DocumentData} from 'firebase/firestore';

const db = getFirestore();

export default function Photos() {
    const images: DocumentData[] = [];

    const readData = async () => {
        const querySnapshot = await getDocs(collection(db, "images"));
        querySnapshot.forEach((doc) => {
            images.push(doc.data());
        });
    }
    readData().then(r => console.log(r));


    return (
        <div>
            <h1>Photos</h1>
            <div>
                {images.map((image) => (
                    <div key={image.id}>
                        <img src={image.fileName} alt={image.fileName}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
