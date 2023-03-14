import firebase_app from "../../pages/firebaseconfig";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";

const auth = getAuth(firebase_app);


export default async function signUp(email: string, password: string, s: string) {

    try {
        return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        return { error };
    }
}