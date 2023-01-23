import React, { useContext } from 'react';
import Navbar from './Navbar';
import { ContextProvider } from '../../context/context-config';

const TeachersIndex = () => {
	const { currentUserData } = useContext(ContextProvider);

	return (
		<div>
			<Navbar />
		</div>
	);
};

export default TeachersIndex;
