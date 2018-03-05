import React from "react";
import { render } from "react-dom";
import { Grid, Row } from "react-bootstrap";

import RecipeBody from "./recipeBody";

const App = () => (
	<div className="container">
		<Grid>
			<Row xs={12} className="text-center">
				<h1>freeCodeCamp Recipe Box</h1>
			</Row>
			<Row xs={12} className="show-grid">
				<RecipeBody />
			</Row>
		</Grid>
	</div>
);

render(<App />, document.getElementById("root"));
