// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyA8lCdSGsJHTIuKvX3ucE4tiuNrk6pqP80',
	authDomain: 'learning-management-syst-c1486.firebaseapp.com',
	projectId: 'learning-management-syst-c1486',
	storageBucket: 'learning-management-syst-c1486.appspot.com',
	messagingSenderId: '67193397543',
	appId: '1:67193397543:web:31aebeaacda743a6928902',
	measurementId: 'G-GDKVSR5L17',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
