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
import { v4 as uuidv4 } from 'uuid';

export const FunctionalitiesContext = createContext();

export const ContextFunctionalities = ({ children }) => {
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	function generateString(length) {
		let result = ' ';
		const charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}

		return result;
	}

	const postContent = (owner, subjectName, content) => {
		let postId = uuidv4();

		setDoc(doc(db, 'posts', postId), {
			subjectName: subjectName,
			owner: owner,
			postId: postId,
			content: content,
			timestamp: serverTimestamp(),
		});
	};
	return (
		<FunctionalitiesContext.Provider value={{ generateString, postContent }}>
			{children}
		</FunctionalitiesContext.Provider>
	);
};
