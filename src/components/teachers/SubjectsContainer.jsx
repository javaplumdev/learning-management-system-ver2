import React from 'react';

const SubjectsContainer = ({ userSubjects }) => {
	const UserSubjectsComponent = () => {
		return (
			<div className="flex">
				{userSubjects?.map &&
					userSubjects.map((item) => {
						return (
							<div key={item.subjectName} className="bg-red-700 mx-3">
								<p>{item.subjectName}</p>
							</div>
						);
					})}
			</div>
		);
	};

	return <UserSubjectsComponent />;
};

export default SubjectsContainer;
