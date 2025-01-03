import { useState } from "react";
import "./Settings.css";
import QRCode from "../../../images/qr-code.png";


const gmtOffsets = [
    { id: 1, "gmt_offset": "GMT-12:00" },
    { id: 2, "gmt_offset": "GMT-11:00" },
    { id: 3, "gmt_offset": "GMT-10:00" },
    { id: 4, "gmt_offset": "GMT-09:00" },
    { id: 5, "gmt_offset": "GMT-08:00" },
    { id: 6, "gmt_offset": "GMT-07:00" },
    { id: 7, "gmt_offset": "GMT-06:00" },
    { id: 8, "gmt_offset": "GMT-05:00" },
    { id: 9, "gmt_offset": "GMT-04:00" },
    { id: 10, "gmt_offset": "GMT-03:00" },
    { id: 11, "gmt_offset": "GMT-02:00" },
    { id: 12, "gmt_offset": "GMT-01:00" },
    { id: 13, "gmt_offset": "GMT+00:00" },
    { id: 14, "gmt_offset": "GMT+01:00" },
    { id: 15, "gmt_offset": "GMT+02:00" },
    { id: 16, "gmt_offset": "GMT+03:00" },
    { id: 17, "gmt_offset": "GMT+03:30" },
    { id: 18, "gmt_offset": "GMT+04:00" },
    { id: 19, "gmt_offset": "GMT+04:30" },
    { id: 20, "gmt_offset": "GMT+05:00" },
    { id: 21, "gmt_offset": "GMT+05:30" },
    { id: 22, "gmt_offset": "GMT+06:00" },
    { id: 23, "gmt_offset": "GMT+06:30" },
    { id: 24, "gmt_offset": "GMT+07:00" },
    { id: 25, "gmt_offset": "GMT+08:00" },
    { id: 26, "gmt_offset": "GMT+09:00" },
    { id: 27, "gmt_offset": "GMT+09:30" },
    { id: 28, "gmt_offset": "GMT+10:00" },
    { id: 29, "gmt_offset": "GMT+10:30" },
    { id: 30, "gmt_offset": "GMT+11:00" },
    { id: 31, "gmt_offset": "GMT+12:00" }
];


const Settings = () => {
    const [email, setEmail] = useState("");
    const [timezone, setTimezone] = useState("");
    const [ipAddress, setIpAddress] = useState("");
    const [autoLogout, setAutoLogout] = useState("");
    const [isNotified, setIsNotified] = useState(true);
    const [isIpBound, setIsIpBound] = useState(false);
    const [isParallelSessionsDisallowed, setIsParallelSessionsDisallowed] = useState(false);
    const [authCode, setAuthCode] = useState("");

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleTimezoneChange = (e) => setTimezone(e.target.value);
    const handleIpAddressChange = (e) => setIpAddress(e.target.value);
    const handleAutoLogoutChange = (e) => setAutoLogout(e.target.value);
    const handleAuthCodeChange = (e) => setAuthCode(e.target.value);
    const handleNotifyChange = () => setIsNotified(!isNotified);
    const handleIpBoundChange = () => setIsIpBound(!isIpBound);
    const handleParallelSessionsChange = () => setIsParallelSessionsDisallowed(!isParallelSessionsDisallowed);


    console.log(email, timezone, ipAddress, autoLogout, isNotified, isIpBound, isParallelSessionsDisallowed, authCode);


    return (
        <div className="sl-dashboard-item">
            <div className="setting-top-card-item">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className="setting-single-item">
                            <div className="input-single-item">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="hofnar05.cc@gmail.com"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                            </div>
                            <div className="switch-main-wrap">
                                <div className="switch-button-wrap">
                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            checked={isNotified}
                                            onChange={handleNotifyChange}
                                        />
                                        <span className="slider round" />
                                    </label>
                                </div>
                                <div className="switch-text">
                                    <h3>Do not be notified to email</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="setting-single-item">
                            <div className="input-single-item">
                                <label htmlFor="timezone">Your Time Zone</label>
                                <div className="flex justify-center items-center">
                                    <select
                                        className="w-full px-7 py-7 bg-[#070d0e] rounded-lg shadow-[0px_0px_4px_0px_rgba(46,215,206,0.50)]"
                                        id="timezone"
                                        value={timezone}
                                        onChange={handleTimezoneChange}
                                        required
                                    >
                                        {gmtOffsets.map((item) => (
                                            <option key={item.id} value={item.gmt_offset}>
                                                {item.gmt_offset}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="setting-single-item">
                            <div className="input-single-item">
                                <label htmlFor="ip-address">Control IP Address Change</label>
                                <input
                                    id="ip-address"
                                    type="text"
                                    placeholder="Enter IP address"
                                    value={ipAddress}
                                    onChange={handleIpAddressChange}
                                    required
                                />
                            </div>
                            <div className="switch-main-wrap">
                                <div className="switch-button-wrap">
                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            checked={isIpBound}
                                            onChange={handleIpBoundChange}
                                        />
                                        <span className="slider round" />
                                    </label>
                                </div>
                                <div className="switch-text">
                                    <h3>Bind session to IP Address</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="setting-single-item">
                            <div className="input-single-item">
                                <label htmlFor="auto-logout">Auto logout in N minutes</label>
                                <input
                                    id="auto-logout"
                                    type="text"
                                    placeholder="0"
                                    value={autoLogout}
                                    onChange={handleAutoLogoutChange}
                                    required
                                />
                            </div>
                            <div className="switch-main-wrap">
                                <div className="switch-button-wrap">
                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            checked={isParallelSessionsDisallowed}
                                            onChange={handleParallelSessionsChange}
                                        />
                                        <span className="slider round" />
                                    </label>
                                </div>
                                <div className="switch-text">
                                    <h3>Disallow parallel sessions</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="setting-bottom-card">
                <div className="qr-code-wrapper">
                    <h4>To activate Google Authenticator use this key:</h4>
                    <h5>dservehn45</h5>
                    <div className="qr-code-image-wrap">
                        <img src={QRCode} alt="QR code for Google Authenticator" />
                    </div>
                    <div className="add-founds-bottom-wrap qr-code-save-btn-wrap">
                        <div className="input-single-item">
                            <label htmlFor="auth-code">Code</label>
                            <input
                                id="auth-code"
                                type="text"
                                placeholder="Input code from application"
                                value={authCode}
                                onChange={handleAuthCodeChange}
                            />
                        </div>
                        <button>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
