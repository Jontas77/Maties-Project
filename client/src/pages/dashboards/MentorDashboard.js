import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const MentorDashboard = ({ setAuth }) => {
	const [name, setName] = useState("");

	const getName = async () => {
		try {
			const response = await fetch("/auth/mentor/dashboard", {
				method: "GET",
				headers: { token: localStorage.token },
			});

			const parseRes = await response.json();

			setName(parseRes[0].mentor_name);
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
		<div>
			<h1>Welcome {name}</h1>
			<h2> Mentor Dashboard</h2>
			<button className="btn btn-primary" onClick={(e) => logout(e)}>
				Logout
			</button>
		</div>
	);
};

export default MentorDashboard;
