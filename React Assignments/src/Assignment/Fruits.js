import React, { Component } from "react";
// functional component which receives fruits as props and displays them in a list
function FruitList({ fruits }) {
    return (
        <div>
            <h3>FruitList</h3>
            {/* Unordered list to display fruits */}
            <ul>
                {/* Using map function to loop through each fruit and display in list */}
                {fruits.map((fruit, index) => (
                    // Each <li> must have a unique key, here we use index
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
}
//class component Fruits manages the state (fruits array + new fruit input)
class Fruits extends Component {
    constructor(props) {
        super(props); // Calls the parent constructor

        // Initialize the component state
        this.state = {
            fruits: ["Apple", "Banana", "orange"],
            // give Input for new fruit
            newFruit: ""
        };
    }
    // Function to update newFruit value when user types in input field
    handleChange = (e) => {
        // Update state with current input value
        this.setState({ newFruit: e.target.value });
    };
    // Function to add new fruit to the list
    addFruit = () => {
        // Check if input is not empty (ignores spaces)
        if (this.state.newFruit.trim() !== "") {
            // Update state by adding new fruit into the fruits array
            this.setState((prevState) => ({
                // Spread operator to add previous fruits + new fruit
                fruits: [...prevState.fruits, prevState.newFruit],
                // Reset input box to empty string
                newFruit: ""
            }));
        }
    };
    render() {
        return (
            <div style={{ margin: "20px" }}>
                <h3>Fruits</h3>
                <input
                    type="text" // Text input (fruit name)
                    value={this.state.newFruit}
                    onChange={this.handleChange} // it Calls handleChange when we type fruit name
                />

                {/* Button to add fruit to the list */}
                <button onClick={this.addFruit}>Add</button>
                {/* Passing fruits array as props to FruitList functional component */}
                <FruitList fruits={this.state.fruits} />
            </div>
        );
    }
}
export default Fruits;