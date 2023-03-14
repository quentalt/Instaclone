import React from 'react';
import {
    onAuthStateChanged,
    getAuth, User,
} from 'firebase/auth';
import firebase_app from "@/pages/firebaseconfig";

const auth = getAuth(firebase_app);

export const AuthContext = React.createContext({});

export const useAuthContext = (auth1: Auth) => React.useContext(AuthContext);

type AuthContextProviderProps = {
    children: React.ReactNode;
}
export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [loading, setLoading] = React.useState(true);
    const [user, setUser] = React.useState<User | null>(null);


    React.useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                setUser(user);
                setLoading(false);
            });
            return unsubscribe;
        }
        , []);

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
