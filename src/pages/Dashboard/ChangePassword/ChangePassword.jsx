import { useState } from "react";

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setError("New password and confirm password do not match.");
        } else {
            setError("");
            console.log("Password changed successfully!");
            alert("Password changed successfully!");
            // Add API call or further processing here
        }
    };

    return (
        <div className="sl-dashboard-item">
            <form onSubmit={handleSubmit} className="change-password-form">
                <div className="change-password-input-box">
                    <div className="input-single-item">
                        <label htmlFor="oldPassword">Old Password</label>
                        <input
                            type="password"
                            id="oldPassword"
                            placeholder="Enter your old password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="change-password-input-box">
                    <div className="input-single-item">
                        <label htmlFor="newPassword">New Password</label>
                        <input
                            type="password"
                            id="newPassword"
                            placeholder="Enter your new password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="change-password-input-box">
                    <div className="input-single-item">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm your new password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                </div>
                {error && <p className="error-message">{error}</p>}
                <div className="change-password-input-box">
                    <button type="submit" className="change-btn">Change</button>
                </div>
            </form>
        </div>
    );
};

export default ChangePassword;
