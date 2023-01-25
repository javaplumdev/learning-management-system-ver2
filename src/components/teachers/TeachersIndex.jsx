import React, { useState, useContext } from 'react';
import Navbar from './Navbar';
import Subjects from './Subjects';
import { ContextProvider } from '../../context/context-config';
import ClipLoader from 'react-spinners/ClipLoader';

const TeachersIndex = () => {
	const { currentUserData, isLoading } = useContext(ContextProvider);
	let [color, setColor] = useState('#ffffff');

	console.log(isLoading);

	return (
		<div>
			{isLoading ? (
				<p>Hi</p>
			) : (
				<>
					<Navbar />
					<Subjects />
				</>
			)}
		</div>
	);
};

export default TeachersIndex;
