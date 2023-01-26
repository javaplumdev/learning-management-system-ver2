import React from 'react';
import Navbar from './Navbar';
import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from 'react-icons/bs';

const CreateActivity = () => {
	return (
		<div>
			<Navbar />
			<div className="container mx-auto grid grid-cols-6 px-2">
				<span></span>
				<div className="col-span-6 md:col-span-4">
					<p className="my-3">Create Activity</p>
					<input
						type="text"
						placeholder="Question"
						className="placeholder:text-md w-full py-3 px-3 bg-inputColor rounded-sm"
					/>

					<input
						type="text"
						placeholder="A"
						className="placeholder:text-md w-full py-3 px-3 bg-inputColor rounded-sm my-3"
					/>

					<input
						type="text"
						placeholder="B"
						className="placeholder:text-md w-full py-3 px-3 bg-inputColor rounded-sm"
					/>

					<input
						type="text"
						placeholder="C"
						className="placeholder:text-md w-full py-3 px-3 bg-inputColor rounded-sm my-2"
					/>

					<input
						type="text"
						placeholder="D"
						className="placeholder:text-md w-full py-3 px-3 bg-inputColor rounded-sm mb-2"
					/>
					<hr></hr>
					<input
						type="text"
						placeholder="Corrent Answer"
						className="placeholder:text-md w-full py-3 px-3 bg-inputColor rounded-sm mt-2"
					/>
					<div>
						<div className="flex justify-between mt-5 border-b-2 border-slate-200 py-2">
							<BsFillArrowLeftCircleFill size={'50'} color={'#00E979'} />
							<BsFillArrowRightCircleFill size={'50'} color={'#00E979'} />
						</div>
						<div className="flex mt-3 justify-end">
							<button className="bg-mainColor p-3  hover:bg-hoverColor text-white rounded-sm">
								Done
							</button>
						</div>
					</div>
				</div>
				<span></span>
			</div>
		</div>
	);
};

export default CreateActivity;
