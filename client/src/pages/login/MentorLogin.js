import React from "react";
import { Link } from "react-router-dom";

const MentorLogin = ({ setAuth }) => {
	return (
		<>
			<Link to="/"><button className="btn btn-primary">Home</button></Link>
			<div>
				<h1 className="text-center my-5">MENTOR LOGIN</h1>
				<form>
					<input
						type="email"
						name="email"
						placeholder="Email"
						className="form-control my-3"
					/>
					<input
						type="password"
						name="password"
						placeholder="Password"
						className="form-control my-3"
					/>
					<button
						className="btn btn-success btn-block"
						onClick={() => setAuth(true)}
					>
						Log in
					</button>
				</form>
			</div>
		</>
	);
};

export default MentorLogin;
