import React from "react";
import { Panel, Button, ButtonGroup } from "react-bootstrap";

export default class RecipeDetail extends React.Component {
	render() {
		const ingredients = this.props.data.ingredients.map((val, i) => (
			<li key={i}>{val}</li>
		));
		return (
			<Panel eventKey={this.props.data.id}>
				<Panel.Heading>
					<Panel.Title toggle>{this.props.data.recipeName}</Panel.Title>
				</Panel.Heading>
				<Panel.Body collapsible>
					<ol>{ingredients}</ol>
					<ButtonGroup>
						<Button bsStyle="danger" onClick={this.props.onDelete}>
							Delete
						</Button>
						<Button onClick={this.props.onEdit}>Edit</Button>
					</ButtonGroup>
				</Panel.Body>
			</Panel>
		);
	}
}
