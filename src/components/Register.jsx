import React, { useState } from 'react';
import { logo } from '../data/data';
import { useNavigate, Link } from 'react-router-dom';

import { ContextProvider } from '../context/context-config';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';

const Register = () => {
	const { createUser } = useContext(ContextProvider);

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [changeSelection, setChangeSelection] = useState(null);
	const [error, setError] = useState('');

	let navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		try {
			createUser(email, password, firstName, lastName, changeSelection);
			toast.success('Successfully created! Please log in.');
			navigate('/');
		} catch (e) {
			setError(e.message);
		}
	};

	const changeSelectionFunc = (e) => {
		console.log(changeSelection);
		setChangeSelection(e);
	};

	return (
		<div>
			<div className="mb-10 flex items-center p-2">
				{logo} <p className="ml-3 text-sm text-greyColor">Charlie's LMS</p>
			</div>

			<div className="flex justify-center items-center">
				<div style={{ width: '720px' }}>
					<div className="px-3">
						<h1 className="text-blackColor text-4xl font-bold">Hola,</h1>
						<p className="my-3 text-greyColor text-sm">
							Welcome! Please enter your details.
						</p>
						{error && (
							<p className="my-3 rounded text-center py-1 bg-red-500 text-white">
								{error}
							</p>
						)}
					</div>
					<form
						onSubmit={handleSubmit}
						className="grid lg:grid-cols-2 gap-x-2 place-content-center px-3"
					>
						<div>
							<input
								type="text"
								placeholder="First name"
								className="placeholder:text-md w-full py-3 px-3 bg-inputColor rounded-sm"
								onChange={(e) => setFirstName(e.target.value)}
								required
							/>
							<input
								type="text"
								placeholder="Last name"
								className="placeholder:text-md w-full py-3 px-3 my-3 bg-inputColor rounded-sm"
								onChange={(e) => setLastName(e.target.value)}
								required
							/>
							<input
								type="text"
								placeholder="Password"
								className="placeholder:text-md w-full py-3 px-3 bg-inputColor rounded-sm"
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>

						<div className="mt-3 lg:mt-0">
							<input
								type="text"
								placeholder="Email"
								className="placeholder:text-md w-full py-3 px-3 bg-inputColor rounded-sm"
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
							<input
								type="text"
								placeholder="Username"
								className="placeholder:text-md w-full py-3 px-3 my-3 bg-inputColor rounded-sm"
								onChange={(e) => setUsername(e.target.value)}
								required
							/>
							<input
								type="text"
								placeholder="Confirm password"
								className="placeholder:text-md w-full py-3 px-3 bg-inputColor rounded-sm"
								onChange={(e) => setConfirmPassword(e.target.value)}
								required
							/>
						</div>
						<div className="w-full  mt-3">
							<div className="my-2 text-center md:text-start">
								<p className="text-md text-greyColor my-2">Are you a? </p>
								<input
									type="radio"
									id="student"
									name="type"
									value="student"
									onChange={(e) => changeSelectionFunc(e.target.value)}
									required
								/>
								<label
									htmlFor="student"
									className="text-md ml-2 text-greyColor"
								>
									Student
								</label>

								<input
									type="radio"
									id="teacher"
									name="type"
									value="teacher"
									className="ml-3"
									onChange={(e) => changeSelectionFunc(e.target.value)}
									required
								/>
								<label
									htmlFor="teacher"
									className="text-md ml-2 text-greyColor"
								>
									Teacher
								</label>
							</div>

							<input type="checkbox" name="agreements" id="" required />
							<label
								htmlFor="agreements"
								className="text-sm ml-2 text-greyColor"
							>
								I agree to all the Term, Privacy Policy and Fees
							</label>
							<button className="bg-mainColor w-full p-3 rounded-md my-3 hover:bg-hoverColor text-white">
								Create Account
							</button>
							<p className="text-greyColor text-sm mb-5">
								Already have an account?{' '}
								<Link to="/" className="text-mainColor">
									Sign in
								</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
