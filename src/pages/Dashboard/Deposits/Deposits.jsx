
import { useLocation } from "react-router-dom";
import "./Deposits.css";

const Deposits = () => {
    const location = useLocation();
    const depositDetails = location.state?.depositDetails;

    return (
        <div className="sm-deposits-item">
            {depositDetails ? (
                // Display deposit details if available
                <div className="sm-make-deposit-item-wrap">
                    <h2 className="sm-make-deposit-item-title">AI TRADER</h2>
                    <ul className="sm-make-deposit-item-list">
                        <li className="sm-make-deposit-item-list-item">
                            <div className="sm-make-deposit-item-list-item-title">
                                Amount of deposit
                            </div>
                            <div className="sm-make-deposit-item-list-item-value">
                                {depositDetails.amount} USD
                            </div>
                        </li>
                        <li className="sm-make-deposit-item-list-item">
                            <div className="sm-make-deposit-item-list-item-title">
                                Total Accrued funds
                            </div>
                            <div className="sm-make-deposit-item-list-item-value">
                                0.00 USD
                            </div>
                        </li>
                        <li className="sm-make-deposit-item-list-item">
                            <div className="sm-make-deposit-item-list-item-title">
                                Accruals
                            </div>
                            <div className="sm-make-deposit-item-list-item-value">
                                {depositDetails.accruals}
                            </div>
                        </li>
                        <li className="sm-make-deposit-item-list-item">
                            <div className="sm-make-deposit-item-list-item-title">
                                Next Accrual
                            </div>
                            <div className="sm-make-deposit-item-list-item-value">
                                {depositDetails.nextAccrual}
                            </div>
                        </li>
                        <li className="sm-make-deposit-item-list-item">
                            <div className="sm-make-deposit-item-list-item-title">
                                Status
                            </div>
                            <div className="sm-make-deposit-item-list-item-value">
                                Active
                            </div>
                        </li>
                    </ul>
                    <div className="sm-make-deposit-item-bottom">
                        <button className="sm-common-btn dark">Cancel</button>
                        <button className="sm-common-btn">More Details</button>
                    </div>
                </div>
            ) : (
                // If no deposit data is passed, show a default message
                <div className="sm-deposits-not-found-item-wrap">
                    <h6 className="sm-deposits-item-not-found-title">
                        Will be displayed here Your deposits
                    </h6>
                </div>
            )}
        </div>
    );
};

export default Deposits;
