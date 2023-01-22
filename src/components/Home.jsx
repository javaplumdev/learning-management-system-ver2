import React from 'react';
import { useContext } from 'react';
import { ContextProvider } from '../context/context-config';
import Navbar from './Navbar';

const Home = () => {
	const { user, users } = useContext(ContextProvider);

	console.log(user);
	console.log(users);

	return (
		<div>
			<Navbar />
		</div>
	);
};

export default Home;
