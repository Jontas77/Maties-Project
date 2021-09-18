import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../pages/stellenbosch-university-logo.png";

const MentorRegister = ({ setAuth }) => {
	const [inputs, setInputs] = useState({
        mentor_name: "",
		mentor_email: "",
		mentor_password: "",
	});

	const { mentor_name, mentor_email, mentor_password } = inputs;

	const onChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

	const onSubmitForm = async (e) => {
		e.preventDefault();

		try {
			const body = { mentor_name, mentor_email, mentor_password };

			const response = await fetch("/auth/mentor/register", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});

			const parseRes = await response.json();

			localStorage.setItem("token", parseRes.token);

			setAuth(true);
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<>
			<Link to="/">
			<img
					className="logo"
					data-qa="logo"
					src={logo}
					alt="Stellenbosch logo"
				/>
			</Link>
			<div>
				<h1 className="text-center my-5">Register as Mentor</h1>
				<form onSubmit={onSubmitForm}>
                <input
						type="text"
						name="mentor_name"
						placeholder="Name"
						className="form-control my-3"
						value={mentor_name}
						onChange={(e) => onChange(e)}
					/>
					<input
						type="email"
						name="mentor_email"
						placeholder="Email"
						className="form-control my-3"
						value={mentor_email}
						onChange={(e) => onChange(e)}
					/>
					<input
						type="password"
						name="password"
						placeholder="Password"
						className="form-control my-3"
						value={mentor_password}
						onChange={(e) => onChange(e)}
					/>
					<button type="submit" className="btn btn-success btn-block">
						Register
					</button>
				</form>
                <Link to="/mentor/login">Already have an account? Log in</Link>
			</div>
		</>
	);
};

export default MentorRegister;

