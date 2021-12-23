import React from "react";

import rigoImage from "../../img/500x325.png";

//create your first component
const CardEnd = () => {
	return (
		<div className="card mt-4 ms-2 mb-4">
			<img src={rigoImage} className="card-img-top" alt="..."></img>
			<div className="card-body">
				<h5 className="card-title text-center">Card title</h5>
				<p className="card-text text-center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Quisque tellus orci, laoreet ut lorem non, sodales lacinia
					velit.{" "}
				</p>
			</div>
			<div class="card-footer d-flex bg-transparent">
				<a
					href="#"
					className="btn btn-primary mx-auto justify-content-center">
					Find Out More!
				</a>
			</div>
		</div>
	);
};

export default CardEnd;
