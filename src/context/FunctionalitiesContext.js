import React, { useState, createContext, useEffect } from 'react';

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

	return (
		<FunctionalitiesContext.Provider value={{ generateString }}>
			{children}
		</FunctionalitiesContext.Provider>
	);
};
