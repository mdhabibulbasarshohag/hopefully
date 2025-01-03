import { useState } from "react";
import "./SignUp.css";
import RobotoInvestments from "../../images/robotoInvestments.png";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptRules: false,
        errorMessage: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Password and confirm password validation
        if (formData.password !== formData.confirmPassword) {
            setFormData((prevData) => ({
                ...prevData,
                errorMessage: "Passwords do not match!",
            }));
            return;
        }

        if (!formData.acceptRules) {
            setFormData((prevData) => ({
                ...prevData,
                errorMessage: "You must accept the terms and conditions.",
            }));
            return;
        }

        // Clear error message on successful validation
        setFormData((prevData) => ({
            ...prevData,
            errorMessage: "",
        }));

        // Log form data (or send it to the backend)
        console.log("Submitted Data:", formData);
    };

    return (
        <div>
            <section className="sh--create--your--account--section">
                <div className="container mx-auto">
                    <div className="sh--create--your--account">
                        <div className="sh--create--your--account--header">
                            <div className="sh--create--your--account--title">
                                <h2 className="sh--common--header--title">Get Started</h2>
                            </div>
                            <div className="sh--create--your--account--title--img">
                                <img src={RobotoInvestments} alt="Header" />
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className="sh--create--your--account--row">
                            <div className="sh--create--your--account--col--header">
                                <div className="sh--create--your--account--form--title">
                                    <h2 className="sh--common--sub--title">Create Your Account</h2>
                                </div>
                            </div>
                            <div className="sh--create--your--account--col--body">
                                <div className="sh--create--your--account--form--group">
                                    <label htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="Write your username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                        aria-label="Username"
                                    />
                                </div>
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
                                <div className="sh--create--your--account--form--group">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="Write your confirm password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                        aria-label="Confirm Password"
                                    />
                                </div>
                                {formData.errorMessage && (
                                    <div className="error-message">
                                        <p style={{ color: "red" }}>{formData.errorMessage}</p>
                                    </div>
                                )}
                                <div className="sh--create--your--account--form--checkbox">
                                    <div className="flex items-start space-x-2">
                                        <input
                                            id="acceptRules"
                                            name="acceptRules"
                                            type="checkbox"
                                            checked={formData.acceptRules}
                                            onChange={handleChange}
                                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                            aria-label="Accept Rules"
                                        />
                                        <label htmlFor="acceptRules" className="text-sm text-gray-700">
                                            I accept&nbsp;
                                            <a href="/rules" className="text-[#83258d] hover:underline">
                                                rules
                                            </a>
                                            &nbsp;and agree to the&nbsp;
                                            <a href="/terms" className="text-[#83258d] hover:underline">
                                                terms of service
                                            </a>
                                        </label>
                                    </div>
                                </div>
                                <div className="sh--create--your--account--form--button">
                                    <button type="submit" className="sh--common--btn">
                                        Register
                                    </button>
                                </div>
                                <div className="sh--login--form--link">
                                    <Link className="sh--login--form--link--a" to="/login">
                                        Already have an account?
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;
