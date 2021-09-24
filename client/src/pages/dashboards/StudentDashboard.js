import React, { useState, useEffect } from "react";
import HeaderDash from "./dashComponents/HeaderDash";
import { toast } from "react-toastify";
import "./Dashboard.css";

import Projects from "./dashComponents/Projects";

const StudentDashboard = ({ setAuth }) => {
	const [name, setName] = useState("");
	const [message, setMessage] = useState("--Nothing to Display--");
	const [page, setPage] = useState("");

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
		<>
		<HeaderDash logout={logout} />
		<div className="container container-fluid">
			<div className="introduction">
				<h1>Student Dashboard</h1>
				<h4>Welcome {name}</h4>
			</div>
			{page === "projects" ?
			(<Projects setPage={setPage} />) : (
				<>
			<div className="display">{message}</div>
			<div className="links-wrapper">
				<div className="links">
					<button className="btn profile-btn">Profile</button>
					<button className="btn projects-btn" onClick={() => setPage("projects")}>Projects</button>
					<button className="btn competitions-btn">Competitions</button>
				</div>
			</div>
			</>
			)}
		</div>
		</>
	);
};

export default StudentDashboard;
