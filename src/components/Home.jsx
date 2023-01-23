import React from 'react';
import { useContext } from 'react';
import { ContextProvider } from '../context/context-config';
import StudentsIndex from './students/StudentsIndex';
import TeachersIndex from './teachers/TeachersIndex';

const Home = () => {
	const { loginType } = useContext(ContextProvider);

	return <>{loginType === 'teacher' ? <TeachersIndex /> : <StudentsIndex />}</>;
};

export default Home;
