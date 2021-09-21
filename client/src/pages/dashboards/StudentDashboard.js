import React, { useState, useEffect } from "react";
import logo from "../stellenbosch-university-logo.png";
import { toast } from "react-toastify";
import "./Dashboard.css";

const StudentDashboard = ({ setAuth }) => {
	const [name, setName] = useState("");

	const getName = async () => {
		try {
			const response = await fetch("/auth/student/dashboard", {
				method: "GET",
				headers: { token: localStorage.token },
			});

			const parseRes = await response.json();

			setName(parseRes[0].student_name);
		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		getName();
	}, []);

	const logout = (e) => {
		e.preventDefault();
		localStorage.removeItem("token");
		setAuth(false);

		toast.success("Logged out successfully!");
	};

	return (
		<div className="container">
			<div className="header-container">
				<div className="logo">
					<img src={logo} className="logo" alt="Stellies Logo" />
				</div>
				<div className="introduction">
					<h1>Welcome {name}</h1>
					<h2> Student Dashboard</h2>
				</div>
				<div>
					<button className="btn btn-primary profile">Profile</button>
					<button className="btn btn-primary logout" onClick={(e) => logout(e)}>
						Logout
					</button>
				</div>
			</div>
			<div className="display">
				--Nothing to Display--
			</div>
		</div>
	);
};

export default StudentDashboard;
