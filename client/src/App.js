import React, { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
// Register
import StudentRegister from "./pages/register/StudentRegister";
import MentorRegister from "./pages/register/MentorRegister";
import AdminRegister from "./pages/register/AdminRegister";

// Log in
import StudentLogin from "./pages/login/StudentLogin";
import MentorLogin from "./pages/login/MentorLogin";
import AdminLogin from "./pages/login/AdminLogin";

// Dashboards
import StudentDashboard from "./pages/dashboards/StudentDashboard";
import MentorDashboard from "./pages/dashboards/MentorDashboard";
import AdminDashboard from "./pages/dashboards/AdminDashboard";

toast.configure();

const App = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const setAuth = (boolean) => {
		setIsAuthenticated(boolean);
	};

	const isAuth = async () => {
		try {
			const response = await fetch("/auth/student/is-verify", {
				method: "GET",
				headers: { token: localStorage.token },
			});

			const parseRes = await response.json();

			parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		isAuth();
	}, []);

	return (
		<>
			<Router>
				<div className="container">
					<Switch>
						<Route exact path="/" render={(props) => <Home {...props} />} />
						<Route
							exact
							path="/student/register"
							render={(props) =>
								!isAuthenticated ? (
									<StudentRegister {...props} setAuth={setAuth} />
								) : (
									<Redirect to="/student/login" />
								)
							}
						/>
						<Route
							exact
							path="/mentor/register"
							render={(props) =>
								!isAuthenticated ? (
									<MentorRegister {...props} setAuth={setAuth} />
								) : (
									<Redirect to="/mentor/login" />
								)
							}
						/>
						<Route
							exact
							path="/admin/register"
							render={(props) =>
								!isAuthenticated ? (
									<AdminRegister {...props} setAuth={setAuth} />
								) : (
									<Redirect to="/admin/login" />
								)
							}
						/>
						<Route
							exact
							path="/student/login"
							render={(props) =>
								!isAuthenticated ? (
									<StudentLogin {...props} setAuth={setAuth} />
								) : (
									<Redirect to="/student/dashboard" />
								)
							}
						/>
						<Route
							exact
							path="/mentor/login"
							render={(props) =>
								!isAuthenticated ? (
									<MentorLogin {...props} setAuth={setAuth} />
								) : (
									<Redirect to="/mentor/dashboard" />
								)
							}
						/>
						<Route
							exact
							path="/admin/login"
							render={(props) =>
								!isAuthenticated ? (
									<AdminLogin {...props} setAuth={setAuth} />
								) : (
									<Redirect to="/admin/dashboard" />
								)
							}
						/>
						<Route
							exact
							path="/student/dashboard"
							render={(props) =>
								isAuthenticated ? (
									<StudentDashboard {...props} setAuth={setAuth} />
								) : (
									<Redirect to="/student/login" />
								)
							}
						/>
						<Route
							exact
							path="/mentor/dashboard"
							render={(props) =>
								isAuthenticated ? (
									<MentorDashboard {...props} setAuth={setAuth} />
								) : (
									<Redirect to="/mentor/login" />
								)
							}
						/>
						<Route
							exact
							path="/admin/dashboard"
							render={(props) =>
								isAuthenticated ? (
									<AdminDashboard {...props} setAuth={setAuth} />
								) : (
									<Redirect to="/admin/login" />
								)
							}
						/>
					</Switch>
				</div>
			</Router>
		</>
	);
};

export default App;
