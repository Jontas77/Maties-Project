import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../pages/stellenbosch-university-logo.png";

const StudentRegister = ({ setAuth }) => {
	const [inputs, setInputs] = useState({
		student_name: "",
		student_email: "",
		student_password: "",
	});

	const { student_name, student_email, student_password } = inputs;

	const onChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

	const onSubmitForm = async (e) => {
		e.preventDefault();

		try {
			const body = { student_name, student_email, student_password };

			const response = await fetch("/auth/student/register", {
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
				<h1 className="text-center my-5">Register as Student</h1>
				<form onSubmit={onSubmitForm}>
					<input
						type="text"
						name="student_name"
						placeholder="Name"
						className="form-control my-3"
						value={student_name}
						onChange={(e) => onChange(e)}
					/>
					<input
						type="email"
						name="student_email"
						placeholder="Email"
						className="form-control my-3"
						value={student_email}
						onChange={(e) => onChange(e)}
					/>
					<input
						type="password"
						name="student_password"
						placeholder="Password"
						className="form-control my-3"
						value={student_password}
						onChange={(e) => onChange(e)}
					/>
					<button type="submit" className="btn btn-success btn-block">
						Register
					</button>
				</form>
				<Link to="/student/login">Already have an account? Log in</Link>
			</div>
		</>
	);
};

export default StudentRegister;
