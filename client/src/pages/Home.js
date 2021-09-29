import { useEffect, useState } from "react";

import "./Home.css";
import HomeLogo from "../images/home_logo.jpg";

import LoginMenu from "../components/LoginMenu";
import RegisterMenu from "../components/RegisterMenu";

export function Home() {
	const [message, setMessage] = useState("Loading...");

	useEffect(() => {
		fetch("/api")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setMessage(body.message);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<main role="main">
			<div className="header">
				<div className="logo">
					<img
						className="logo"
						data-qa="logo"
						src={HomeLogo}
						alt="Just the React logo"
					/>
				</div>

				<RegisterMenu />
				<LoginMenu />
			</div>
			<center>
				<h1 className="message" data-qa="message">
					{message}
				</h1>
				<h2 className="intro">Introduction</h2>
				<p>
					Welcome to a place where you can post your project ideas and where you
					can access it all in one place
				</p>
				<h4 className="register-link">Please Log in to continue</h4>
			</center>
		</main>
	);
}

export default Home;
