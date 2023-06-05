import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "../Navbar.jsx";
import Jumbotron from "../Jumbotron.jsx";
import Cards from "./Cards.jsx";
import Footer from "../Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<div className='container mt-5 text-start'>
				<Jumbotron />
				<div class="d-flex justify-content-center text-start mt-5">
					<Cards />
					<Cards />
					<Cards />
					<Cards />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
