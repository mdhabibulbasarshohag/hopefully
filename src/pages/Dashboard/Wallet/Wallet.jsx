import { useState } from "react";
import "./Wallet.css";

const wallets = [
    { id: 1, title: "Bitcoin", label: "BCH-Address", placeholder: "Code here..." },
    { id: 2, title: "BitcoinCash", label: "BCH-Address", placeholder: "Code here..." },
    { id: 3, title: "Ethereum ETH", label: "Ethereum-Address", placeholder: "Code here..." },
    { id: 4, title: "Litecoin", label: "LTC-Address", placeholder: "Code here..." },
    { id: 5, title: "Dash", label: "Dash-Address", placeholder: "Code here..." },
    { id: 6, title: "TRC20 USDT", label: "TRON-Address", placeholder: "Code here..." },
    { id: 7, title: "BEP20 USDT", label: "BSC-Address", placeholder: "Code here..." },
    { id: 8, title: "ERC20 USDT", label: "Ethereum-Address", placeholder: "Code here..." },
    { id: 9, title: "TRON TRX", label: "TRON-Address", placeholder: "Code here..." },
    { id: 10, title: "Dogecoin", label: "DOGE-Address", placeholder: "Code here..." },
    { id: 11, title: "BSC BNB", label: "BSC-Address", placeholder: "Code here..." },
    { id: 12, title: "BEP20 BUSD", label: "BSC-Address", placeholder: "Code here..." },
    { id: 13, title: "ePayCore USD", label: "Account", placeholder: "Code here..." },
    { id: 14, title: "Polygon MATIC", label: "Polygon-Address", placeholder: "Code here..." },
    { id: 15, title: "Polygon USDT", label: "Polygon-Address", placeholder: "Code here..." },
];

const Wallet = () => {
    // State to hold wallet address data
    const [walletData, setWalletData] = useState(
        wallets.reduce((acc, wallet) => {
            acc[wallet.id] = "";
            return acc;
        }, {})
    );

    // Handle input change
    const handleInputChange = (event, walletId) => {
        setWalletData({
            ...walletData,
            [walletId]: event.target.value,
        });
    };

    // Handle save button click
    const handleSave = () => {
        console.log("Saved Wallet Data:", walletData);
    };

    return (
        <div className="sl-dashboard-item">
            <form className="grid grid-cols-4 gap-4">
                {wallets.map((wallet) => (
                    <div key={wallet.id} className="sl-wallets-single-item">
                        <h3>{wallet.title}</h3>
                        <div className="input-single-item">
                            <label htmlFor={wallet.label}>{wallet.label}</label>
                            <input
                                type="text"
                                id={wallet.label}
                                placeholder={wallet.placeholder}
                                value={walletData[wallet.id]}
                                onChange={(e) => handleInputChange(e, wallet.id)}
                            />
                        </div>
                    </div>
                ))}
            </form>
            <div className="wallets-save-btn-wrap">
                <button type="button" onClick={handleSave}>Save</button>
            </div>
        </div>
    );
};

export default Wallet;
