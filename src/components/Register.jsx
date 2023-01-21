import React from 'react';
import { logo } from '../data/data';
import { Link } from 'react-router-dom';

const Register = () => {
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
					</div>
					<form className="grid lg:grid-cols-2 gap-x-2 place-content-center px-3">
						<div>
							<input
								type="text"
								placeholder="First name"
								className="placeholder:text-md w-full py-3 px-3 bg-inputColor rounded-sm"
							/>
							<input
								type="text"
								placeholder="Last name"
								className="placeholder:text-md w-full py-3 px-3 my-3 bg-inputColor rounded-sm"
							/>
							<input
								type="text"
								placeholder="Username"
								className="placeholder:text-md w-full py-3 px-3 bg-inputColor rounded-sm"
							/>
						</div>

						<div className="mt-3 lg:mt-0">
							<input
								type="text"
								placeholder="Email"
								className="placeholder:text-md w-full py-3 px-3 bg-inputColor rounded-sm"
							/>
							<input
								type="text"
								placeholder="Password"
								className="placeholder:text-md w-full py-3 px-3 my-3 bg-inputColor rounded-sm"
							/>
							<input
								type="text"
								placeholder="Confirm password"
								className="placeholder:text-md w-full py-3 px-3 bg-inputColor rounded-sm"
							/>
						</div>
						<div className="w-full  mt-3">
							<input type="checkbox" name="agreements" id="" />
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
