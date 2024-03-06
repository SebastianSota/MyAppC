// Import the functions you need from the SDKs you need
import { getApp, initializeApp, isInitialized } from "firebase/app";
import { useEffect } from "react";
import { useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlbOQidhkztwpRg7fpVhIeWTZVsqkqg1U",
    authDomain: "mercadito-utez-5c.firebaseapp.com",
    projectId: "mercadito-utez-5c",
    storageBucket: "mercadito-utez-5c.appspot.com",
    messagingSenderId: "934898995860",
    appId: "1:934898995860:web:7dfa41174da42471275a81",
    measurementId: "G-6QPK23K81G"
};

export const Firebase = () => {
    const [appFirebase, setApp] = useState();
    useEffect(() => {
        if (!isInitialized) {
            const app = initializeApp(firebaseConfig);
            setApp(app);

        } else {
            const app = getApp();
            setApp(app)
        }
        return () => { };
    }, []);

    return { appFirebase, setApp };
}

