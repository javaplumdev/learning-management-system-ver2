import React, { useContext } from 'react';
import { ContextProvider } from '../../context/context-config';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { IoLogOut } from 'react-icons/io5';

const Settings = () => {
	const { logOut } = useContext(ContextProvider);
	let navigate = useNavigate();

	const handleLogOut = () => {
		navigate('/');
		logOut();
	};

	return (
		<div>
			<Navbar />
			<div className="mx-auto container px-3">
				<button onClick={() => handleLogOut()} className="flex items-center">
					<IoLogOut size={'30'} color={'#00E979'} />{' '}
					<p className="ml-2">Log out</p>
				</button>
			</div>
		</div>
	);
};

export default Settings;
