import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextProvider } from '../../context/context-config';
import Navbar from './Navbar';

const SubjectDetails = () => {
	const { id } = useParams();
	const { subjects } = useContext(ContextProvider);

	const subject =
		subjects?.filter && subjects.filter((item) => item.subjectName === id);

	return (
		<div>
			<Navbar />
			<div className="container mx-auto">
				{subject?.map &&
					subject.map((item) => {
						return (
							<div key={item.subjectName} className="">
								<p>{item.subjectName}</p>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default SubjectDetails;
