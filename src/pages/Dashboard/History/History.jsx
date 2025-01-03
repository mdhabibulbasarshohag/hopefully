import { Link } from "react-router-dom";
import "./History.css";

// Sample data
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

const History = () => {
    return (
        <>
            <div className="sm-history-items">
                {historyItems.map((item) => (
                    <div className="sm-history-item" key={item.id}>
                        <div className="sm-history-item-left">
                            <ul className="sm-make-deposit-item-list">
                                <li className="sm-make-deposit-item-list-item">
                                    <div className="sm-make-deposit-item-list-item-title">
                                        Date/operation
                                    </div>
                                    <div className="sm-make-deposit-item-list-item-value">
                                        {item.date}
                                    </div>
                                </li>
                                <li className="sm-make-deposit-item-list-item">
                                    <div className="sm-make-deposit-item-list-item-title">
                                        Pay.system
                                    </div>
                                    <div className="sm-make-deposit-item-list-item-value">
                                        {item.paySystem}
                                    </div>
                                </li>
                                <li className="sm-make-deposit-item-list-item">
                                    <div className="sm-make-deposit-item-list-item-title">
                                        In
                                    </div>
                                    <div className="sm-make-deposit-item-list-item-value">
                                        {item.in}
                                    </div>
                                </li>
                                <li className="sm-make-deposit-item-list-item">
                                    <div className="sm-make-deposit-item-list-item-title">
                                        State
                                    </div>
                                    <div className="sm-make-deposit-item-list-item-value">
                                        {item.state}
                                    </div>
                                </li>
                                <li className="sm-make-deposit-item-list-item">
                                    <div className="sm-make-deposit-item-list-item-title">
                                        Memo
                                    </div>
                                    <div className="sm-make-deposit-item-list-item-value">
                                        {item.memo}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="sm-history-item-right">
                            <Link to={`/history-details/${item.id}`}>
                                <button className="sm-common-btn">More Details</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default History;
