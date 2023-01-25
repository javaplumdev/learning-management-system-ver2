import React from 'react';
import { Link } from 'react-router-dom';

const SubjectsContainer = ({ userSubjects }) => {
	const UserSubjectsComponent = () => {
		return (
			<div className="flex flex-wrap	">
				{userSubjects?.map &&
					userSubjects.map((item) => {
						return (
							<Link
								to={`/subject/${item.subjectName}`}
								key={item.subjectName}
								className="mx-3 p-3 rounded border border-bg-slate-700"
							>
								<p>{item.subjectName}</p>
							</Link>
						);
					})}
			</div>
		);
	};

	return <UserSubjectsComponent />;
};

export default SubjectsContainer;
