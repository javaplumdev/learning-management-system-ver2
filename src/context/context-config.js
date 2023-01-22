import React, { useState, createContext, useEffect } from 'react';
import { db, auth } from '../firebase/firebase-config';
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { setDoc, doc, collection, onSnapshot } from 'firebase/firestore';

export const ContextProvider = createContext();

export const ContextFunction = ({ children }) => {
	const [user, setUser] = useState(null);
	const [users, setUsers] = useState(null);

	const createUser = async (email, password, firstName, lastName) => {
		const userCredentials = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);

		try {
			const userId = userCredentials.user.uid;

			setDoc(doc(db, 'users', userId), {
				id: userId,
				email: email,
				password: password,
				firstName: firstName,
				lastName: lastName,
			});
		} catch (e) {
			console.warn(e.message);
		}

		return userCredentials;
	};

	const logIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	useEffect(() => {
		onSnapshot(collection(db, 'users'), (snapshot) => {
			setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		});
	}, []);

	return (
		<ContextProvider.Provider value={{ createUser, logIn, user, users }}>
			{children}
		</ContextProvider.Provider>
	);
};
