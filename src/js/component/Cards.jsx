import React from "react";

import rigoImage from "../../img/500x325.png";

//create your first component
const Cards = () => {
	return (
		<div className="card">
			<img src={rigoImage} className="card-img-top" alt="..."></img>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

export default Cards;
