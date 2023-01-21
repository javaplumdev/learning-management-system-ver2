import React from 'react';
import { useContext } from 'react';
import { ContextProvider } from '../context/context-config';

const Home = () => {
	const { user } = useContext(ContextProvider);

	console.log(user);

	return <div>Home</div>;
};

export default Home;
