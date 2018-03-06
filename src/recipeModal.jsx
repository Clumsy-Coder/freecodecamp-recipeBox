import React from "react";
import {
	Modal,
	Button,
	ControlLabel,
	FormControl,
	FormGroup,
} from "react-bootstrap";

export default class RecipeModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			isValid: false,
		};

		this.closeModal = this.closeModal.bind(this);
		this.onSaveClick = this.onSaveClick.bind(this);
		this.checkData = this.checkData.bind(this);
	}

	openModal() {
		this.setState({ show: true });
	}

	closeModal() {
		this.setState({ show: false, isValid: false });
	}

	onSaveClick() {
		this.props.onSave({
			id: this.props.modalData.id,
			recipeName: this.recipeName.value,
			ingredients: this.ingredients.value.split(","),
		});
		this.closeModal();
	}

	checkData() {
		this.setState({
			isValid: !!(this.recipeName.value && this.ingredients.value),
		});
	}

	render() {
		const { recipeName = "", ingredients = [] } = this.props.modalData;
		return (
			<Modal show={this.state.show} onHide={this.closeModal}>
				<Modal.Header>
					<Modal.Title>
						{recipeName.length > 0 ? "Edit Recipe" : "Add a recipe"}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<FormGroup controlId="recipeName">
						<ControlLabel>Recipe name</ControlLabel>
						<FormControl
							inputRef={ref => (this.recipeName = ref)}
							type="text"
							placeholder="Recipe name"
							defaultValue={recipeName}
							onChange={this.checkData}
						/>
					</FormGroup>
					<FormGroup controlId="ingredients">
						<ControlLabel>Ingredients</ControlLabel>
						<FormControl
							inputRef={ref => (this.ingredients = ref)}
							componentClass="textarea"
							placeholder="Please add ingredients separated by comma"
							defaultValue={ingredients.join(",")}
							onChange={this.checkData}
							style={{ resize: "none" }}
						/>
					</FormGroup>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.closeModal}>Cancel</Button>
					<Button
						bsStyle="primary"
						onClick={this.onSaveClick}
						disabled={!this.state.isValid}>
						Save changes
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}
