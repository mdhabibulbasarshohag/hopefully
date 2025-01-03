import { useState } from "react";
import "./Questions.css";

const Questions = () => {
    const data = [
        {
            id: 1,
            question: "What is React?",
            answer: "React is a JavaScript library for building user interfaces.",
        },
        {
            id: 2,
            question: "What is Tailwind CSS?",
            answer: "Tailwind CSS is a utility-first CSS framework for creating custom designs.",
        },
        {
            id: 3,
            question: "What is an Accordion?",
            answer: "An Accordion is a UI component that allows for collapsible content sections.",
        },
    ];

    const [openQuestionId, setOpenQuestionId] = useState(null);

    const toggleQuestion = (id) => {
        setOpenQuestionId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="sh--questions--section">
            <div className="container mx-auto">
                <div className="sh--questions--section--header">
                    <h2 className="subHeader">Frequently Asked Questions</h2>
                </div>
                <div className="sh--questions--section--body">
                    {data.map((item) => (
                        <div key={item.id} className="sh--questions--item--question">
                            <button
                                onClick={() => toggleQuestion(item.id)}
                                className="sh--questions--item--question--btn"
                            >
                                <div className="sh--questions--item--question--btn--left">
                                    <div>
                                        {openQuestionId === item.id ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={49}
                                                height={49}
                                                viewBox="0 0 49 49"
                                                fill="none"
                                            >
                                                <path
                                                    d="M0 24.4825C9.61127 25.3557 15.1334 26.1589 18.5235 28.8133C22.5078 31.9216 23.4515 37.6144 24.5 49C25.5835 37.1953 26.5621 31.5374 30.9308 28.4989C34.321 26.124 39.8081 25.3557 49 24.5175C39.4237 23.6443 33.8666 22.8411 30.5114 20.2217C26.4922 17.0784 25.5485 11.4205 24.5 0C23.5214 10.5125 22.6476 16.1354 19.3973 19.3835C16.1469 22.6315 10.485 23.5396 0 24.4825Z"
                                                    fill="#83258D"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={49}
                                                height={49}
                                                viewBox="0 0 49 49"
                                                fill="none"
                                            >
                                                <path
                                                    d="M0 24.4825C9.61127 25.3557 15.1334 26.1589 18.5235 28.8133C22.5078 31.9216 23.4515 37.6144 24.5 49C25.5835 37.1953 26.5621 31.5374 30.9308 28.4989C34.321 26.124 39.8081 25.3557 49 24.5175C39.4237 23.6443 33.8666 22.8411 30.5114 20.2217C26.4922 17.0784 25.5485 11.4205 24.5 0C23.5214 10.5125 22.6476 16.1354 19.3973 19.3835C16.1469 22.6315 10.485 23.5396 0 24.4825Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                    <div>
                                        <span>{item.question}</span>
                                    </div>
                                </div>

                                <div>
                                    {openQuestionId === item.id ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={40}
                                            height={41}
                                            viewBox="0 0 40 41"
                                            fill="none"
                                        >
                                            <path
                                                d="M10.1334 26.8667L20.5167 26.8667L29.8667 26.8667C31.4667 26.8667 32.2667 24.9334 31.1334 23.8L22.5001 15.1667C21.1167 13.7834 18.8667 13.7834 17.4834 15.1667L14.2001 18.45L8.85005 23.8C7.73338 24.9334 8.53339 26.8667 10.1334 26.8667Z"
                                                fill="white"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={40}
                                            height={41}
                                            viewBox="0 0 40 41"
                                            fill="none"
                                        >
                                            <path
                                                d="M29.8666 14.1333H19.4833H10.1333C8.53328 14.1333 7.73328 16.0666 8.86661 17.2L17.4999 25.8333C18.8833 27.2166 21.1333 27.2166 22.5166 25.8333L25.7999 22.55L31.1499 17.2C32.2666 16.0666 31.4666 14.1333 29.8666 14.1333Z"
                                                fill="#83258D"
                                            />
                                        </svg>
                                    )}
                                </div>
                            </button>
                            <div
                                className={`sl--questions--item--answer ${openQuestionId === item.id ? 'open' : ''}`}
                            >
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Questions;
