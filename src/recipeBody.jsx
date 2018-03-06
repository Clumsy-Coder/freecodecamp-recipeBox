import React from "react";
import { Button } from "react-bootstrap";

import RecipeModal from "./recipeModal";
import RecipeList from "./recipeList";

export default class RecipeBody extends React.Component {
	constructor(props) {
		super(props);
		this.modalData = {};

		let localRecipes =
			JSON.parse(
				localStorage.getItem("com.clumsy-coder.freeCodeCamp.recipes"),
			) || [];

		this.state = {
			recipes: localRecipes,
		};

		this.prepareModal = this.prepareModal.bind(this);
		this.saveRecipe = this.saveRecipe.bind(this);
		this.deleteRecipe = this.deleteRecipe.bind(this);
	}

	componentDidUpdate() {
		localStorage.setItem(
			"com.clumsy-coder.freeCodeCamp.recipes",
			JSON.stringify(this.state.recipes),
		);
	}

	saveRecipe(newRecipe) {
		if (!newRecipe.id) {
			newRecipe.id = Date.now();
			this.setState({ recipes: [...this.state.recipes, newRecipe] });
		} else {
			const update = this.state.recipes.map((cur, i) => {
				if (cur.id === newRecipe.id) {
					cur.recipeName = newRecipe.recipeName;
					cur.ingredients = newRecipe.ingredients;
				}
				return cur;
			});
			this.setState({ recipes: update });
		}
	}

	prepareModal(recipe) {
		this.modalData = recipe || { recipeName: "", ingredients: [] };
		this.refs.modal.openModal();
		this.forceUpdate();
	}

	deleteRecipe(recipe) {
		this.setState({
			recipes: this.state.recipes.filter(cur => {
				return cur.id !== recipe.id;
			}),
		});
	}

	render() {
		return (
			<div>
				<RecipeList
					recipes={this.state.recipes}
					onEdit={this.prepareModal}
					onDelete={this.deleteRecipe}
				/>
				<Button onClick={this.prepareModal}>Add Recipe</Button>
				<RecipeModal
					ref="modal"
					modalData={this.modalData}
					onSave={this.saveRecipe}
				/>
			</div>
		);
	}
}
