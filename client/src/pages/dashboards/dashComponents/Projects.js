/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import AddProject from "./AddProject";

const Projects = ({ setPage, project }) => {

	return (
		<>
			<div className="project-container">
				<div className="projects-sidebar">
					<h2 className="mb-5">My Projects</h2>
					<div className="back">
						<i className="fas fa-arrow-left" onClick={() => setPage("")}>
							{"  "}Go Back
						</i>
					</div>
					<div className="new-project">
						<i className="fas fa-plus">
							{"  "}Add Project
						</i>
					</div>
				</div>
				<div className="projects-main">
					{project === true ? <AddProject /> : <h1>Please add new Project!</h1>}
				</div>
			</div>
		</>
	);
};

export default Projects;
