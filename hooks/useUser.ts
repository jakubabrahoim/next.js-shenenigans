import { getAuth } from "firebase/auth";
import { app } from "../firebaseConfig";

import { useEffect, useState } from "react";

export const useUser = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const auth = getAuth(app);
    useEffect(() => { 
        const handleChange = (user: any) => {
            setCurrentUser(user);
        }

        return () => { 
            auth.onAuthStateChanged((user) => {
                if(user) handleChange(user);
                else handleChange(null);
            }
        )};
    });
    return currentUser;
}
        