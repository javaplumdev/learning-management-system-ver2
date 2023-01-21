import React, { useState, createContext, useEffect } from 'react';
import { db, auth } from '../firebase/firebase-config';
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

export const ContextProvider = createContext();

export const ContextFunction = ({ children }) => {
	const [user, setUser] = useState(null);

	const createUser = (email, password) => {
		onAuthStateChanged(auth, (currentUser) => {
			try {
				setDoc(doc(db, 'users', currentUser.uid), {
					id: currentUser.uid,
					email: email,
					password: password,
				});
			} catch (e) {
				console.log(e);
			}
		});

		return createUserWithEmailAndPassword(auth, email, password);
	};

	const logIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (current) => {
			setUser(current);
		});

		return () => {
			unsub();
		};
	}, []);

	return (
		<ContextProvider.Provider value={{ createUser, logIn }}>
			{children}
		</ContextProvider.Provider>
	);
};
