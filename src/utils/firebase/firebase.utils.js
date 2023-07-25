import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDSB1ADNQjC-lfJK4ElRdSLLdTFCVicjI0",
    authDomain: "crwn-clothing-db-54667.firebaseapp.com",
    projectId: "crwn-clothing-db-54667",
    storageBucket: "crwn-clothing-db-54667.appspot.com",
    messagingSenderId: "175106592372",
    appId: "1:175106592372:web:672ed8a619b2ba33be0b21"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('Error Creating User', error.message);
        };
    };

    return userDocRef;
};