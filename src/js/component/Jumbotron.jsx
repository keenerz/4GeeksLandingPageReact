import React from "react";

//create your first component
const Jumbotron = () => {
	return (
		<div className="jumbotron bg-light rounded">
			<h1 className="display-4 pt-5 ps-4 mt-3">A Warm Welcome!</h1>
			<p className="lead ps-4">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
				tellus orci, laoreet ut lorem non, sodales lacinia velit. Mauris
				vehicula lacus ac varius volutpat. Etiam ipsum lectus, tempor ut
				nulla nec, elementum ullamcorper massa
			</p>
			<a
				className="btn btn-primary btn-lg mb-5 ms-4"
				href="#"
				role="button">
				Call to action!
			</a>
		</div>
	);
};

export default Jumbotron;
