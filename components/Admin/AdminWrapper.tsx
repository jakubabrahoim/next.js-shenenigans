import LoginForm from "./LoginForm";
import { useUser } from "../../hooks/useUser";
import { useRouter } from "next/router";
import { useEffect } from "react";

const AdminWrapper = () => {
    const currentUser = useUser();
    const router = useRouter();

    useEffect(() => {
        if(currentUser) {
            router.push('/');
        }
    }, [currentUser, router]);

    return (
        <div className='h-9.5/10 bg-alabaster'>
            <LoginForm />
        </div>
    )
}

export default AdminWrapper;