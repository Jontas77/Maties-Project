/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";
import { AiOutlineMenu, AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai";
import { GrProjects, GrAchievement } from "react-icons/gr";
import {
	Menu,
	MenuItem,
	ProSidebar,
	SidebarHeader,
	SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "../../dashboards/Dashboard.css";

const SideNav = ({ name, setPage, setProject }) => {
	const [collapsed, setCollapsed] = useState(false);

	// added styles
	const styles = {
		sideBarHeight: {
			height: "100vh",
		},
		menuIcon: {
			float: "right",
			margin: "10px",
		},
	};
	const onClickMenuIcon = () => {
		setCollapsed(!collapsed);
	};

	const handleClick = () => {
		setProject(true);
	};

	return (
		<ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
			<SidebarHeader>
				<div style={styles.menuIcon} onClick={onClickMenuIcon}>
					<AiOutlineMenu />
				</div>
			</SidebarHeader>
			<Menu iconShape="square">
				<MenuItem icon={<AiOutlineUser />} onClick={() => setPage("")}>{name}</MenuItem>
				<MenuItem icon={<AiOutlineUserAdd />} onClick={() => setPage("profile")} >Profile</MenuItem>
				<SubMenu title="Projects" icon={<GrProjects />}>
					<MenuItem onClick={() => setPage("projects")}>View Projects</MenuItem>
					<MenuItem onClick={handleClick}>Add Project</MenuItem>
					<MenuItem>Download Template</MenuItem>
				</SubMenu>
				<MenuItem icon={<GrAchievement />} onClick={() => setPage("competitions")}>Competitions</MenuItem>
			</Menu>
		</ProSidebar>
	);
};
export default SideNav;
