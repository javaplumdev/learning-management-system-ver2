import React, { useState, createContext, useEffect } from 'react';
import { db, auth } from '../firebase/firebase-config';
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { setDoc, doc, collection, onSnapshot } from 'firebase/firestore';
import { toast } from 'react-hot-toast';

export const ContextProvider = createContext();

export const ContextFunction = ({ children }) => {
	const [user, setUser] = useState(null);
	const [users, setUsers] = useState(null);

	const createUser = async (
		email,
		password,
		firstName,
		lastName,
		changeSelection
	) => {
		const userCredentials = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);

		if (
			email === '' ||
			email === null ||
			password === '' ||
			password === null ||
			firstName === '' ||
			firstName === null ||
			lastName === '' ||
			lastName === null ||
			changeSelection === '' ||
			changeSelection === null
		) {
			toast.error('Enter missing input fields!');
		} else {
			try {
				const userId = userCredentials.user.uid;

				setDoc(doc(db, 'users', userId), {
					id: userId,
					email: email,
					password: password,
					firstName: firstName,
					lastName: lastName,
					loginType: changeSelection,
				});
			} catch (e) {
				console.warn(e.message);
			}
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

	let currentUserData = {};
	const currentUser =
		users?.filter && users.filter((item) => user.uid === item.id);

	for (let i = 0; i < currentUser?.length; i++) {
		Object.assign(currentUserData, currentUser[i]);
	}

	const { loginType } = currentUserData;

	return (
		<ContextProvider.Provider
			value={{ loginType, createUser, logIn, user, users, currentUserData }}
		>
			{children}
		</ContextProvider.Provider>
	);
};
