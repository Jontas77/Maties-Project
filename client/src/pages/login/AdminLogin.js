import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../pages/stellenbosch-university-logo.png";

const AdminLogin = ({ setAuth }) => {
	const [inputs, setInputs] = useState({
		admin_email: "",
		admin_password: "",
	});

	const { admin_email, admin_password } = inputs;

	const onChange = (e) => {
		setInputs((input) => {
			return { ...input, [e.target.name]: e.target.value };
		});
	};

	const onSubmitForm = async (e) => {
		e.preventDefault();

		try {
			const body = { admin_email, admin_password };

			const response = await fetch("/auth/admin/login", {
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
				<h1 className="text-center my-5">ADMIN LOGIN</h1>
				<form onSubmit={onSubmitForm}>
					<input
						type="email"
						name="admin_email"
						placeholder="Email"
						className="form-control my-3"
						value={admin_email}
						onChange={(e) => onChange(e)}
					/>
					<input
						type="password"
						name="admin_password"
						placeholder="Password"
						className="form-control my-3"
						value={admin_password}
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

export default AdminLogin;
