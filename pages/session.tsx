import React from "react";
import { useRouter } from "next/navigation";
import {useAuthContext} from "@/Context/AuthContext";

function Login() {
    const router = useRouter();
    const  user  = useAuthContext();

    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user])


    return (<h1>  Only logged in users can view this page</h1>);
}

export default Login;