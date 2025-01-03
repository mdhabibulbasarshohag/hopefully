import { useParams, Link } from "react-router-dom";

// Sample data (same as History.js)
const historyItems = [
    {
        id: 1,
        date: "Yesterday 12:28",
        paySystem: "Bitcoin",
        in: "0.003372 BTC",
        state: "Prepared",
        memo: "Batch-number"
    },
    {
        id: 2,
        date: "Today 09:15",
        paySystem: "Ethereum",
        in: "0.15 ETH",
        state: "Completed",
        memo: "Payment for services"
    },
    {
        id: 3,
        date: "Yesterday 17:47",
        paySystem: "PayPal",
        in: "$120.00",
        state: "Pending",
        memo: "Refund request"
    },
    {
        id: 4,
        date: "Today 11:05",
        paySystem: "Bitcoin",
        in: "0.005 BTC",
        state: "Cancelled",
        memo: "Transaction issue"
    },
    {
        id: 5,
        date: "Dec 30, 2024 14:22",
        paySystem: "Stripe",
        in: "$220.50",
        state: "Completed",
        memo: "Monthly subscription"
    },
    {
        id: 6,
        date: "Dec 29, 2024 21:12",
        paySystem: "Ethereum",
        in: "0.01 ETH",
        state: "Prepared",
        memo: "Product purchase"
    }
];

const HistoryDetails = () => {
    const { id } = useParams(); // Get the id from the URL
    const historyItem = historyItems.find((item) => item.id === parseInt(id)); // Find the corresponding item

    if (!historyItem) {
        return <p>History not found!</p>; // If the item is not found
    }

    return (
        <section className="sm-history-items-details">
            <div>
                <div className="sm-make-deposit-item-wrap">
                    <h2 className="sm-make-deposit-item-title">ADD FUNDS</h2>
                    <ul className="sm-make-deposit-item-list">
                        <li className="sm-make-deposit-item-list-item">
                            <div className="sm-make-deposit-item-list-item-title">State</div>
                            <div className="sm-make-deposit-item-list-item-value">
                                {historyItem.state}
                            </div>
                        </li>
                        <li className="sm-make-deposit-item-list-item">
                            <div className="sm-make-deposit-item-list-item-title">Date</div>
                            <div className="sm-make-deposit-item-list-item-value">
                                {historyItem.date}
                            </div>
                        </li>
                        <li className="sm-make-deposit-item-list-item">
                            <div className="sm-make-deposit-item-list-item-title">Pay.system</div>
                            <div className="sm-make-deposit-item-list-item-value">
                                {historyItem.paySystem}
                            </div>
                        </li>
                        <li className="sm-make-deposit-item-list-item">
                            <div className="sm-make-deposit-item-list-item-title">Amount</div>
                            <div className="sm-make-deposit-item-list-item-value">
                                {historyItem.in}
                            </div>
                        </li>
                        <li className="sm-make-deposit-item-list-item">
                            <div className="sm-make-deposit-item-list-item-title">Memo</div>
                            <div className="sm-make-deposit-item-list-item-value">
                                {historyItem.memo}
                            </div>
                        </li>
                    </ul>
                    <div className="sm-make-deposit-item-bottom">
                        <Link to="/">
                            <button className="sm-common-btn dark">Cancel</button>
                        </Link>
                        {/* Optional: Remove the "More Details" button if it's redundant */}
                        <button className="sm-common-btn">More Details</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HistoryDetails;
