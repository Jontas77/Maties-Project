import React from "react";

const AdminDashboard = ({ setAuth }) => {
	return (
		<div>
			<h1>WELCOME ADMIN</h1>
			<h2>DASHBOARD</h2>
			<button className="btn btn-primary" onClick={() => setAuth(false)}>Log out</button>
		</div>
	);
};

export default AdminDashboard;
