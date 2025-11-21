import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import BarraNavegacion from "./BarraNavegacion";
import Jumbotron from "./Jumbotron";
import Tarjetas from "./Tarjetas";
import Footer from "./Footer";


//create your first component
const Home = () => {
	return (
		<div className="">
			<BarraNavegacion />
			<div className="container">
				<Jumbotron />
				<Tarjetas />
			</div>
			<div className=" ">
				<Footer/>
			</div>
		</div>
	);
};

export default Home;