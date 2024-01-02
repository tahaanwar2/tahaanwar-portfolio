// UserAuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";

export const UserContext = createContext();

export const useAuth = () => {
    return useContext(UserContext);
};

const UserAuthContext = ({ children }) => {
    const [currentuser, setuser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setuser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const profileInformation = (profile) => {
        return addDoc(collection(db, "profile"), profile);
    };

    const UserLogin = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);

    const SignUp = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password);

    const value = {
        SignUp,
        UserLogin,
        profileInformation,
        currentuser,
    };

    return (
        <UserContext.Provider value={value}>
            {!loading && children}
        </UserContext.Provider>
    );
};

export default UserAuthContext;
