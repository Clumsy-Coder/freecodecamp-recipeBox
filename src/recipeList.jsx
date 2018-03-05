import React from "react";
import { PanelGroup } from "react-bootstrap";

import RecipeDetail from "./recipeDetail";

export default class RecipeList extends React.Component {
	render() {
		const recipes = this.props.recipes.map((val, i) => (
			<RecipeDetail
				key={i}
				data={val}
				onDelete={() => this.props.onDelete(val)}
				onEdit={() => this.props.onEdit(val)}
			/>
		));
		return (
			<PanelGroup accordion id="recipe-body">
				{recipes}
			</PanelGroup>
		);
	}
}
