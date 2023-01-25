import React, { useState, createContext, useEffect } from 'react';
import { db, auth } from '../firebase/firebase-config';
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	getAdditionalUserInfo,
} from 'firebase/auth';
import {
	setDoc,
	doc,
	collection,
	onSnapshot,
	query,
	orderBy,
	serverTimestamp,
} from 'firebase/firestore';
import { toast } from 'react-hot-toast';
import { profilePicture } from '../data/data';

export const ContextProvider = createContext();

export const ContextFunction = ({ children }) => {
	const [user, setUser] = useState(null);
	const [users, setUsers] = useState(null);
	const [subjects, setSubjects] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	function generateRandomArray(n, values) {
		let arr = [];
		for (let i = 0; i < n; i++) {
			let index = Math.floor(Math.random() * values.length);
			arr.push(values[index]);
		}
		return arr;
	}

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

		let randomProfilePicture = generateRandomArray(1, profilePicture);

		try {
			const userId = userCredentials.user.uid;

			setDoc(doc(db, 'users', userId), {
				id: userId,
				email: email,
				password: password,
				firstName: firstName,
				lastName: lastName,
				loginType: changeSelection,
				profilePicture: randomProfilePicture.toString(),
			});
		} catch (e) {
			console.warn(e.message);
		}

		return userCredentials;
	};

	const logIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const createSubject = (subjectName, userId, subjectCode) => {
		setDoc(doc(db, 'subjects', subjectName), {
			subjectName: subjectName,
			owner: userId,
			password: subjectCode,
			timestamp: serverTimestamp(),
		});
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

		const querySubjects = query(
			collection(db, 'subjects'),
			orderBy('timestamp', 'desc')
		);

		onSnapshot(querySubjects, (snapshot) => {
			setSubjects(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		});

		setIsLoading(false);
	}, []);

	let currentUserData = {};

	const currentUser =
		users?.filter && users.filter((item) => user?.uid === item.id);

	for (let i = 0; i < currentUser?.length; i++) {
		Object.assign(currentUserData, currentUser[i]);
	}

	const { loginType } = currentUserData;

	return (
		<ContextProvider.Provider
			value={{
				loginType,
				createUser,
				logIn,
				user,
				users,
				currentUserData,
				createSubject,
				subjects,
				isLoading,
			}}
		>
			{children}
		</ContextProvider.Provider>
	);
};
