import React from "react";
import { toast } from "react-toastify";
import { AiOutlineLogout } from "react-icons/ai";
import { Navbar, NavbarText } from "reactstrap";
import logo from "../../../images/home_logo.jpg";

const HeaderDashboard = ({ setAuth }) => {
	const logout = (e) => {
		e.preventDefault();
		localStorage.removeItem("token");
		setAuth(false);

		toast.success("Logged out successfully!");
	};

	return (
		<div>
			<Navbar className="navbar" light expand="md">
				<div className="logo">
					<img src={logo} className="logo" alt="Stellies Logo" />
				</div>
                <div className="dashboard">
                    <h4 style={{ color: "white" }}>Student Dashboard</h4>
                </div>

				<NavbarText>
					<div>
						<button className="logout" onClick={(e) => logout(e)}>
							<AiOutlineLogout /> Logout
						</button>
					</div>
				</NavbarText>
			</Navbar>
		</div>
	);
};
export default HeaderDashboard;
