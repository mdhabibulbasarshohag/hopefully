import { useState } from "react";
import "./Withdraw.css";

const withdrawalCategories = [
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
    { id: 15, label: "Polygon USDT" },
];

const Withdraw = () => {
    const [selectedCategory, setSelectedCategory] = useState(1); // Default to "Bitcoin"
    const [amount, setAmount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedLabel = withdrawalCategories.find(
            (category) => category.id === selectedCategory
        )?.label;
        console.log("Selected Category:", selectedLabel);
        console.log("Amount:", amount);
    };

    return (
        <div className="sl-dashboard-item">
            <div className="add-founds-category-wrapper">
                <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-4">
                    {withdrawalCategories.map(({ id, label }) => (
                        <div key={id} className="add-founds-category">
                            <input
                                type="radio"
                                name="withdrawCategory"
                                id={`withdrawCategory${id}`}
                                value={id}
                                className="hidden"
                                checked={selectedCategory === id}
                                onChange={() => setSelectedCategory(id)}
                            />
                            <label htmlFor={`withdrawCategory${id}`}>{label}</label>
                        </div>
                    ))}

                    <div className="add-founds-bottom-wrap col-span-4">
                        <div className="input-single-item">
                            <label htmlFor="withdrawAmount">Amount</label>
                            <input
                                id="withdrawAmount"
                                type="text"
                                placeholder="Enter your amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="next-button">
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Withdraw;
