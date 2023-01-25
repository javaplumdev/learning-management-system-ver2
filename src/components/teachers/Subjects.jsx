import React, { useContext, useState } from 'react';
import sadImages from '../../images/flame-202.png';
import Modal from 'react-modal';
import { ContextProvider } from '../../context/context-config';
import { FunctionalitiesContext } from '../../context/FunctionalitiesContext';
import toast from 'react-hot-toast';
import SubjectsContainer from './SubjectsContainer';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

Modal.setAppElement(document.getElementById('root'));

const Subjects = () => {
	const { createSubject, currentUserData, subjects } =
		useContext(ContextProvider);
	const { generateString } = useContext(FunctionalitiesContext);
	const { id } = currentUserData;

	let subtitle;
	const [modalIsOpen, setIsOpen] = useState(false);
	const [subjectName, setSubjectName] = useState(null);

	const userSubjects =
		subjects?.filter && subjects.filter((item) => item.owner === id);

	console.log(userSubjects);

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		subtitle.style.color = '#000';
	}

	function closeModal() {
		setIsOpen(false);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		createSubject(subjectName, id, generateString(8));
		closeModal();
		toast.success('Subject created');
	};

	return (
		<div className="container mx-auto ">
			{userSubjects.length === 0 ? (
				<div
					className="flex justify-center items-center"
					style={{ height: '80vh' }}
				>
					<div className="text-center px-3">
						<img src={sadImages} alt="sadImages" className="mb-5" />
						<p className="text-slate-500 text-sm">
							You don't have any created classes yet. <br></br>Want to create?
						</p>
						<button
							onClick={openModal}
							className="bg-mainColor w-full py-2 rounded-md my-3 hover:bg-hoverColor text-white"
						>
							Create
						</button>
					</div>
				</div>
			) : (
				<>
					<div className="flex items-center justify-between mx-3">
						<p className=" my-5 text-lg font-bold">My subjects</p>
						<button
							onClick={openModal}
							className="bg-mainColor px-3  py-2 rounded-md my-3 hover:bg-hoverColor text-white"
						>
							Create
						</button>
					</div>

					<SubjectsContainer userSubjects={userSubjects} />
				</>
			)}
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<div>
					<div className="flex justify-between">
						<h2 ref={(_subtitle) => (subtitle = _subtitle)}>Create subject</h2>
						<button onClick={closeModal}>close</button>
					</div>
					<form onSubmit={handleSubmit} style={{ maxWidth: '320px' }}>
						<p className="py-3">Please enter the details.</p>
						<input
							type="text"
							placeholder="Subject name"
							className=" placeholder-slate-400 p-1 px-3 border rounded border-gray-200 w-full"
							onChange={(e) => setSubjectName(e.target.value)}
							required
						/>

						<button className="mt-3 w-full bg-mainColor hover:bg-hoverColor px-3 py-2 rounded text-white">
							Add
						</button>
					</form>
				</div>
			</Modal>
		</div>
	);
};

export default Subjects;
