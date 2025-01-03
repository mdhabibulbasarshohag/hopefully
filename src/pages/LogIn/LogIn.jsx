import { useState } from "react";
import { Link } from "react-router-dom";
import RobotoInvestments from "../../images/RobotoInvestments.png";
import "./LogIn.css";

const LogIn = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        errorMessage: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            setFormData((prevData) => ({
                ...prevData,
                errorMessage: "Both fields are required.",
            }));
            return;
        }

        // Simulate a successful login or handle login logic
        console.log("Login data:", formData);
    };

    return (
        <section className="sh--create--your--account--section">
            <div className="container mx-auto">
                <div className="sh--create--your--account">
                    <div className="sh--create--your--account--header">
                        <div className="sh--create--your--account--title">
                            <h2 className="sh--common--header--title">Login</h2>
                        </div>
                        <div className="sh--create--your--account--title--img">
                            <img src={RobotoInvestments} alt="header" />
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="sh--create--your--account--row">
                        <div className="sh--create--your--account--col--header">
                            <div className="sh--create--your--account--form--title">
                                <h2 className="sh--common--sub--title">Login Account</h2>
                            </div>
                        </div>
                        <div className="sh--create--your--account--col--body">
                            <div className="sh--create--your--account--form--group">
                                <label htmlFor="email">E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Write your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    aria-label="Email"
                                />
                            </div>
                            <div className="sh--create--your--account--form--group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Write your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    aria-label="Password"
                                />
                            </div>
                            {formData.errorMessage && (
                                <div className="error-message">
                                    <p style={{ color: "red" }}>{formData.errorMessage}</p>
                                </div>
                            )}
                            <div className="sh--create--your--account--form--button">
                                <button type="submit" className="sh--common--btn">
                                    Log In
                                </button>
                            </div>
                            <div className="sh--login--form--link">
                                <Link
                                    className="sh--login--form--link--a"
                                    to="/sign-up"
                                >
                                    Create an account
                                </Link>
                                <Link className="sh--login--form--link--a" to="/">
                                    Forgot password?
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LogIn;
