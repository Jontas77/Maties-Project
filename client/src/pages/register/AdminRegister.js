import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../pages/stellenbosch-university-logo.png";

const AdminRegister = ({ setAuth }) => {
	const [inputs, setInputs] = useState({
        name: "",
		email: "",
		password: "",
	});

	const { name, email, password } = inputs;

	const onChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

	const onSubmitForm = async (e) => {
		e.preventDefault();

		try {
			const body = { name, email, password };

			const response = await fetch("/auth/admin/register", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});

			const parseRes = await response.json();
			// localStorage.setItem("token", parseRes.token);
console.log(parseRes);
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
				<h1 className="text-center my-5">Register as Admin</h1>
				<form onSubmit={onSubmitForm}>
                <input
						type="text"
						name="name"
						placeholder="Name"
						className="form-control my-3"
						value={name}
						onChange={(e) => onChange(e)}
					/>
					<input
						type="email"
						name="email"
						placeholder="Email"
						className="form-control my-3"
						value={email}
						onChange={(e) => onChange(e)}
					/>
					<input
						type="password"
						name="password"
						placeholder="Password"
						className="form-control my-3"
						value={password}
						onChange={(e) => onChange(e)}
					/>
					<button type="button" className="btn btn-success btn-block">
						Register
					</button>
				</form>
                <Link to="/admin/login">Already have an account? Log in</Link>
			</div>
		</>
	);
};

export default AdminRegister;

