// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDW_gWiLcZ2smzzkfUcSCPXm033yHTW6oc',
	authDomain: 'learning-management-syst-c866f.firebaseapp.com',
	projectId: 'learning-management-syst-c866f',
	storageBucket: 'learning-management-syst-c866f.appspot.com',
	messagingSenderId: '254007579339',
	appId: '1:254007579339:web:7fe564db2e1a9dafb3c14e',
	measurementId: 'G-YXT3CHZYVR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
