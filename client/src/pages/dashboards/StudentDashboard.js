import React, { useState, useEffect } from "react";

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
	};

	return (
		<div>
			<h1>Welcome {name}</h1>
			<h2>Dashboard</h2>
			<button className="btn btn-primary" onClick={(e) => logout(e)}>Logout</button>
		</div>
	);
};

export default StudentDashboard;
