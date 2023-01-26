import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ContextProvider } from '../../context/context-config';
import Navbar from './Navbar';
import { AiFillPlusCircle } from 'react-icons/ai';
import { FunctionalitiesContext } from '../../context/FunctionalitiesContext';
import toast from 'react-hot-toast';

const SubjectDetails = () => {
	const { id } = useParams();
	const { subjects, user, posts, currentUserData } =
		useContext(ContextProvider);
	const { postContent } = useContext(FunctionalitiesContext);

	const [content, setContent] = useState('');

	const { profilePicture, firstName, lastName } = currentUserData;

	const subject =
		subjects?.filter && subjects.filter((item) => item.subjectName === id);

	const subjectPosts =
		posts?.filter && posts.filter((item) => item.subjectName === id);

	const handlePost = (e) => {
		e.preventDefault();

		postContent(user.uid, id, content);

		setContent('');

		toast.success('Posted!');
	};

	return (
		<div>
			<Navbar />
			<div className="container mx-auto grid grid-cols-3 px-3 gap-2">
				<div className="col-span-3 md:col-span-1 border-b-2 border-slate-200 md:border-b-0 mb-3 md:mb-0">
					{/* {subject?.map &&
						subject.map((item) => {
							return <p key={item.subjectName}>{item.subjectName}</p>;
						})} */}
					<div className="flex justify-between items-center md:my-0 pb-2 md:pb-0">
						<p className="text-2xl font-bold text-blackColor">Activities</p>
						<Link to="/create/activity">
							<AiFillPlusCircle size={'50'} color={'#00E979'} />
						</Link>
					</div>
				</div>

				<div className="col-span-3 md:col-span-2">
					<form onSubmit={(e) => handlePost(e)}>
						<div className="flex">
							<input
								type="text"
								placeholder="Got announcement to make?"
								className="placeholder:text-md w-full py-3 px-3 bg-inputColor rounded-sm"
								value={content}
								onChange={(e) => setContent(e.target.value)}
								required
							/>
							<button className="bg-mainColor p-3  hover:bg-hoverColor text-white">
								Post
							</button>
						</div>
					</form>

					{subjectPosts?.length === 0 ? (
						<p className="text-center text-2xl mt-12">No post</p>
					) : (
						<>
							<p className="mt-2 text-slate-800 text-lg">Posts</p>
							{subjectPosts?.map &&
								subjectPosts.map((item) => {
									return (
										<div key={item.postId} className="shadow-sm my-2 p-3">
											<div>
												<div className="flex">
													<img
														src={profilePicture}
														alt={profilePicture}
														className="mr-3"
														style={{
															borderRadius: '50%',
															width: '40px',
															objectFit: 'cover',
															height: '40px',
															transform: 'scale(1.2)',
														}}
													/>
													<p className="text-slate-700">
														{firstName + ' ' + lastName}
													</p>
												</div>

												<p className="text-slate-500">{item.content}</p>
											</div>
										</div>
									);
								})}
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default SubjectDetails;
