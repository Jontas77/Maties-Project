import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../pages/stellenbosch-university-logo.png";

const AdminRegister = ({ setAuth }) => {
	const [inputs, setInputs] = useState({
        admin_name: "",
		admin_email: "",
		admin_password: "",
	});

	const { admin_name, admin_email, admin_password } = inputs;

	const onChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

	const onSubmitForm = async (e) => {
		e.preventDefault();

		try {
			const body = { admin_name, admin_email, admin_password };

			const response = await fetch("/auth/admin/register", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});

			const parseRes = await response.json();
			console.log(parseRes);
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
				<h1 className="text-center my-5">Register as Admin</h1>
				<form onSubmit={onSubmitForm}>
                <input
						type="text"
						name="admin_name"
						placeholder="Name"
						className="form-control my-3"
						value={admin_name}
						onChange={(e) => onChange(e)}
					/>
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
						Register
					</button>
				</form>
                <Link to="/admin/login">Already have an account? Log in</Link>
			</div>
		</>
	);
};

export default AdminRegister;

