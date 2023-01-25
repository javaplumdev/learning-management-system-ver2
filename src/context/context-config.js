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
import { setDoc, doc, collection, onSnapshot } from 'firebase/firestore';
import { toast } from 'react-hot-toast';
import { profilePicture } from '../data/data';

export const ContextProvider = createContext();

export const ContextFunction = ({ children }) => {
	const [user, setUser] = useState(null);
	const [users, setUsers] = useState(null);
	const [subjects, setSubjects] = useState(null);

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
				profilePicture: randomProfilePicture,
			});
		} catch (e) {
			console.warn(e.message);
		}

		return userCredentials;
	};

	// const googleSignIn = async () => {
	// 	const googleAuthProvider = new GoogleAuthProvider();

	// 	return signInWithPopup(auth, googleAuthProvider).then(
	// 		async function createUserDb(userCredentials) {
	// 			const details = getAdditionalUserInfo(userCredentials);

	// 			if (details.isNewUser) {
	// 				setDoc(
	// 					doc(db, 'users', userCredentials.user.uid),
	// 					{
	// 						id: userCredentials.user.uid,
	// 						name: userCredentials.user.displayName,
	// 						email: userCredentials.user.email,
	// 						profilePicture: [userCredentials.user.photoURL],
	// 					},
	// 					{ merge: true }
	// 				);
	// 			}
	// 		}
	// 	);
	// };

	const logIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const createSubject = (subjectName, userId, subjectCode) => {
		setDoc(doc(db, 'subjects', subjectName), {
			subjectName: subjectName,
			owner: userId,
			password: subjectCode,
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

		onSnapshot(collection(db, 'subjects'), (snapshot) => {
			setSubjects(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		});
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
			}}
		>
			{children}
		</ContextProvider.Provider>
	);
};
