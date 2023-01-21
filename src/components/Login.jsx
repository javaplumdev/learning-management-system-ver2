import React from 'react';
import { loginImage, logo } from '../data/data';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
	return (
		<div className="h-screen grid lg:grid-cols-2">
			<div>
				<div className="mb-10 flex items-center p-2">
					{logo} <p className="ml-3 text-sm text-greyColor">Charlie's LMS</p>
				</div>
				<div className="flex justify-center items-center container mx-auto px-3">
					<form>
						<div>
							<h1 className="text-blackColor text-4xl font-bold">Hello,</h1>
							<p className="my-3 text-greyColor text-sm">
								Welcome! Please enter your details.
							</p>
							<div className="border border-greyColor py-3 rounded-sm w-full text-blackColor flex items-center justify-center">
								<FcGoogle className="mr-2" size="20" /> Log in with Google
							</div>
						</div>
						<p className="text-center my-5 text-greyColor text-sm">or</p>
						<div>
							<input
								type="text"
								placeholder="Username"
								className="placeholder:text-md w-full py-3 px-3 bg-inputColor rounded-sm"
							/>
							<input
								type="text"
								placeholder="Password"
								className="placeholder:text-md w-full py-3 px-3 bg-inputColor rounded-sm my-3"
							/>
							<div className="flex justify-between text-greyColor mt-3 items-center">
								<div>
									<input type="checkbox" name="remember" />
									<label
										htmlFor="remember"
										className="ml-2 text-greyColor text-sm"
									>
										Remember me
									</label>
								</div>
								<p className="text-sm">Forgot Password</p>
							</div>
							<button className="bg-mainColor w-full p-3 rounded-md my-3 hover:bg-hoverColor">
								Log in
							</button>
							<p className="text-center text-greyColor text-sm">
								Don’t have an account?{' '}
								<Link to="/register" className="text-mainColor">
									Sign up
								</Link>
							</p>
						</div>
					</form>
				</div>
			</div>

			<div className="hidden lg:block">
				<img src={loginImage} style={{ height: '100%', objectFit: 'cover' }} />
			</div>
		</div>
	);
};

export default Login;
