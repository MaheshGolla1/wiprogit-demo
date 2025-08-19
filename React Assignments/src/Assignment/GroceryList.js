
import React from "react";

// Functional Component GroceryList
// Props: items (array of grocery item names)
function GroceryList({ items }) {
    return (
        <div>
            {/*Title for the list */}
            <h2>Grocery List</h2>

            {/*we Render items dynamically using map() */}
            <ul>
                {items.map((item, index) => (
                    // key is required to make each <li> unique
                    <li key={index}>{item}</li>
                ))}
            </ul>

            {/* Button with alert message when we click */}
            <button onClick={() => alert("Groceries Added to Cart!")}>
                Add to Cart
            </button>
        </div>
    );
}
export default GroceryList;
