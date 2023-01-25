import React, { useContext } from 'react';
import { ContextProvider } from '../../context/context-config';
import { logo } from '../../data/data';

const Navbar = () => {
	const { currentUserData } = useContext(ContextProvider);

	const { profilePicture } = currentUserData;

	console.log(currentUserData);

	return (
		<div className="px-3">
			<div className="mx-auto container py-3 flex justify-between items-center">
				{logo}
				<img
					src={profilePicture[0]}
					alt="profilePicture"
					style={{
						borderRadius: '50%',
						width: '40px',
						objectFit: 'cover',
						height: '40px',
						transform: 'scale(1.2)',
					}}
				/>
			</div>
		</div>
	);
};

export default Navbar;
