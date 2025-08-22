
import React, { Component } from "react";
// Functional component to display television models
function TelevisionList({ models }) {
    return (
        <div>
            <h3>Television Models</h3>
            <ul>
                {/* Loop through each model and display it */}
                {models.map((model, index) => (
                    <li key={index}>{model}</li>
                ))}
            </ul>
        </div>
    );
}
// Class component that manages television models
class TelevisionManager extends Component {
    constructor(props) {
        super(props); // it Calls the parent constructor

        // Initialize state with some television models
        this.state = {
            models: ["Samsung", "Sony", "LG"],
            newModel: ""
        };
    }

    // Handle input field changes
    handleChange = (e) => {
        this.setState({ newModel: e.target.value });
    };

    // Add a new television model to the list
    addModel = () => {
        if (this.state.newModel.trim() !== "") {
            this.setState((prevState) => ({
                // Spread operator adds previous models and new model
                models: [...prevState.models, prevState.newModel],
                newModel: ""
            }));
        }
    };


    render() {
        return (
            <div style={{ margin: "20px" }}>
                <h3>Television Manager</h3>

                {/* Input field for new model */}
                <input
                    type="text"
                    placeholder="Enter television model"
                    value={this.state.newModel}
                    onChange={this.handleChange}
                />

                {/* Button to add model */}
                <button onClick={this.addModel}>Add</button>

                {/* Pass models to functional component */}
                <TelevisionList models={this.state.models} />
            </div>
        );
    }
}

export default TelevisionManager;
