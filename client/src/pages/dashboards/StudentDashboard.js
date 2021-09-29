/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import HeaderDashboard from "./dashComponents/HeaderDashboard";
import SideNav from "./dashComponents/SideNav";
import "./Dashboard.css";

import Projects from "./dashComponents/Projects";
import Profile from "./dashComponents/Profile";
import Competitions from "./dashComponents/Competitions";
import { Col, Row } from "reactstrap";

const StudentDashboard = ({ setAuth }) => {
	const [name, setName] = useState("");
	// const [message, setMessage] = useState("");
	const [page, setPage] = useState("");
	const [project, setProject] = useState(false);

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

	const styles = {
		contentDiv: {
			display: "flex",
		},
		contentMargin: {
			marginLeft: "10px",
			width: "100%",
		},
	};
	return (
		<>
			<Row>
				<Col>
					<HeaderDashboard setAuth={setAuth} />
				</Col>
			</Row>
			<div style={styles.contentDiv}>
				<SideNav name={name} setPage={setPage} setProject={setProject} />
				<div style={styles.contentMargin}>
					{page === "profile" ? (
						<Profile setPage={setPage} />
					) : page === "projects" ? (
						<Projects setPage={setPage} project={project} />
					) : page === "competitions" ? (
						<Competitions setPage={setPage} />
					) : (
						<>
							<h1 >Welcome back {name}</h1>
							<table className="table table-hover mt-5">
								<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">Project Title</th>
										<th scope="col">Description</th>
										<th scope="col">Status</th>
									</tr>
								</thead>
							</table>
						</>
					)}
				</div>
			</div>
		</>
	);
};
export default StudentDashboard;

// import React, { useState, useEffect } from "react";
// // import logo from "../stellenbosch-university-logo.png";
// import { toast } from "react-toastify";
// import "./Dashboard.css";

// import Projects from "./dashComponents/Projects";
// import HeaderDashboard from "./dashComponents/HeaderDashboard";

// const StudentDashboard = ({ setAuth }) => {
// 	const [name, setName] = useState("");
// 	const [page, setPage] = useState("");

// 	const getName = async () => {
// 		try {
// 			const response = await fetch("/auth/student/dashboard", {
// 				method: "GET",
// 				headers: { token: localStorage.token },
// 			});

// 			const parseRes = await response.json();

// 			setName(parseRes[0].student_name);
// 		} catch (error) {
// 			console.error(error.message);
// 		}
// 	};

// 	useEffect(() => {
// 		getName();
// 	}, []);

// 	const logout = (e) => {
// 		e.preventDefault();
// 		localStorage.removeItem("token");
// 		setAuth(false);

// 		toast.success("Logged out successfully!");
// 	};

// 	return (
// 		<div className="container container-fluid">
// 			<HeaderDashboard logout={logout} />
// 			<div className="introduction">
// 				<h1>Student Dashboard</h1>
// 				<h4>Welcome {name}</h4>
// 			</div>
// 			{page === "projects" ?
// 			(<Projects setPage={setPage} />) : (
// 				<>
// 			<div className="display">--Nothing to Display--</div>
// 			<div className="links-wrapper">
// 				<div className="links">
// 					<button className="btn message-btn">Messages</button>
// 					<button className="btn projects-btn" onClick={() => setPage("projects")}>Projects</button>
// 					<button className="btn competitions-btn">Competitions</button>
// 				</div>
// 			</div>
// 			</>
// 			)}
// 		</div>
// 	);
// };

// export default StudentDashboard;

{
	/* <div className="header-container">
				<div className="logo">
					<img src={logo} className="logo" alt="Stellies Logo" />
				</div>

				<div className="nav-links">
					<button className="btn profile-btn">Profile</button>
					<button className="btn logout-btn" onClick={(e) => logout(e)}>
						Logout
					</button>
				</div>
			</div> */
}
