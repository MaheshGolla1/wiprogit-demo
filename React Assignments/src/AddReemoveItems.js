import React, { useState } from 'react';

function AddRemoveItems() {
    const [Items, setItem] = useState(["Banana", "Coconut", "Apple", "Orange"]);

    function addItem() {
        const newFood = document.getElementById("foodInput").value.trim();
        if (newFood) {
            setItem(prevItems => [...prevItems, newFood]);
        }
        document.getElementById("foodInput").value = "";
    }

    function deleteItem(index) {
        setItem(prevItems => prevItems.filter((_, i) => i !== index));
    }

    return (
        <>
            <p>Items are:</p>
            <ul>
                {Items.map((item, index) => (
                    <li key={index} onClick={() => deleteItem(index)}>
                        {item}
                    </li>
                ))}
            </ul>

            <input type="text" id="foodInput" />
            <button onClick={addItem}>ADD FOOD</button>
        </>
    );
}

export default AddRemoveItems;
