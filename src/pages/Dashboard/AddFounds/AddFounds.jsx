import { useState } from "react";
import "./AddFounds.css";

// Define categories array
const categories = [
    { id: 1, label: "Bitcoin" },
    { id: 2, label: "Bitcoin Cash" },
    { id: 3, label: "Ethereum" },
    { id: 4, label: "Litecoin" },
    { id: 5, label: "Dash" },
    { id: 6, label: "Usdt TRC20" },
    { id: 7, label: "Usdt BEP20" },
    { id: 8, label: "Usdt ERC20" },
    { id: 9, label: "Tron" },
    { id: 10, label: "Doge" },
    { id: 11, label: "Binance Smart Chain" },
    { id: 12, label: "Busd BEP20" },
    { id: 13, label: "ePayCore" },
    { id: 14, label: "Polygon MATIC" },
    { id: 15, label: "Polygon USDT" }
];

const AddFounds = () => {
    // State to hold the selected category and amount
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [amount, setAmount] = useState("");

    // Handler for category selection
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // Handler for amount input change
    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    // Handler for the "Next" button click
    const handleNextClick = () => {
        if (!selectedCategory || !amount) {
            alert("Please select a category and enter an amount.");
            return;
        }
        console.log("Selected Category:", selectedCategory);
        console.log("Entered Amount:", amount);
        // You can then perform further actions like navigation or data submission here
    };

    return (
        <>
            <div className="sl-dashboard-item">
                <div className="add-founds-category-wrapper">
                    <form action="" className="grid grid-cols-4 gap-4">
                        {categories.map(category => (
                            <div key={category.id}>
                                <div className="add-founds-category">
                                    <input
                                        type="radio"
                                        name="addFoundCategory"
                                        value={category.label}
                                        id={`addFoundCategory${category.id}`}
                                        className="hidden"
                                        onChange={handleCategoryChange}
                                    />
                                    <label htmlFor={`addFoundCategory${category.id}`}>
                                        {category.label}
                                    </label>
                                </div>
                            </div>
                        ))}
                    </form>
                </div>
                <div className="add-founds-bottom-wrap">
                    <div className="input-single-item">
                        <label htmlFor="">Amount</label>
                        <input
                            type="text"
                            value={amount}
                            onChange={handleAmountChange}
                            placeholder="Enter your amount"
                        />
                    </div>
                    <button type="button" onClick={handleNextClick}>Next</button>
                </div>
            </div>
        </>
    );
};

export default AddFounds;

