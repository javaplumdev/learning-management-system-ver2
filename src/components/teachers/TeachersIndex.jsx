import React, { useContext } from 'react';
import Navbar from './Navbar';
import Subjects from './Subjects';
import { ContextProvider } from '../../context/context-config';

const TeachersIndex = () => {
	const { currentUserData } = useContext(ContextProvider);

	console.log(currentUserData);

	return (
		<div>
			<Navbar />
			<Subjects />
		</div>
	);
};

export default TeachersIndex;
