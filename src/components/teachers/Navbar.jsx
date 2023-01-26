import React, { useContext } from 'react';
import { ContextProvider } from '../../context/context-config';
import { logo } from '../../data/data';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const { currentUserData } = useContext(ContextProvider);

	const { profilePicture } = currentUserData;

	return (
		<div className="px-3">
			<div className="mx-auto container py-3 flex justify-between items-center">
				<Link to="/home">{logo}</Link>

				<Link to="/settings/teachers">
					<img
						src={profilePicture}
						alt="profilePicture"
						style={{
							borderRadius: '50%',
							width: '40px',
							objectFit: 'cover',
							height: '40px',
							transform: 'scale(1.2)',
						}}
					/>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
