import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Profile = ({ setPage }) => {
	return (
		<>
			<h1>My Profile Page</h1>
			<div className="back">
				<FaLongArrowAltLeft title="Go Back" onClick={() => setPage("")} />
			</div>
		</>
	);
};

export default Profile;
