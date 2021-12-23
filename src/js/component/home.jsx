import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx";
import CardStart from "./CardStart.jsx";
import CardEnd from "./CardEnd.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="d-lg-flex">
					<CardStart />
					<Cards />
					<Cards />
					<CardEnd />
				</div>
			</div>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<Footer />
		</div>
	);
};

export default Home;
