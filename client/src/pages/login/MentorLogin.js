import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../pages/stellenbosch-university-logo.png";

const MentorLogin = ({ setAuth }) => {
	const [inputs, setInputs] = useState({
		mentor_email: "",
		mentor_password: "",
	});

	const { mentor_email, mentor_password } = inputs;

	const onChange = (e) => {
		setInputs((input) => {
			return { ...input, [e.target.name]: e.target.value };
		});
	};

	const onSubmitForm = async (e) => {
		e.preventDefault();

		try {
			const body = { mentor_email, mentor_password };

			const response = await fetch("/auth/student/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});

			const parseRes = await response.json();

			localStorage.setItem("token", parseRes.token);

			if (parseRes.token) {
				setAuth(true);
			}
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
				<h1 className="text-center my-5">STUDENT LOGIN</h1>
				<form onSubmit={onSubmitForm}>
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
						name="mentor_password"
						placeholder="Password"
						className="form-control my-3"
						value={mentor_password}
						onChange={(e) => onChange(e)}
					/>
					<button type="submit" className="btn btn-success btn-block">
						Log in
					</button>
				</form>
			</div>
		</>
	);
};

export default MentorLogin;
