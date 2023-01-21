import React, { useState, createContext } from 'react';

export const ContextProvider = createContext();

export const ContextFunction = ({ children }) => {
	const [hi, setHi] = useState('');

	return (
		<ContextProvider.Provider value={{ hi }}>
			{children}
		</ContextProvider.Provider>
	);
};
