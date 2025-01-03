

const AllPages = () => {
    return (
        <section className="bg-white min-h-screen">
            <div className="container p-4 mt-5">
                <h3 className="fw-bolder mb-3">
                    At a glance, you can see all the link of your website :
                </h3>
                {/* pages for anyone */}
                <ul className="m-auto list-unstyled ">
                    <li className="bi bi-caret-right-fill">
                        <a
                            className="py-1 px-2 d-inline-block text-decoration-none fs-5 text-dark fw-bold"
                            href="/"
                            target="_blank"
                        >
                            Home Page
                        </a>
                    </li>
                    <li className="bi bi-caret-right-fill">
                        <a
                            className="py-1 px-2 d-inline-block text-decoration-none fs-5 text-dark fw-bold"
                            href="/contact"
                            target="_blank"
                        >
                            Contact
                        </a>
                    </li>
                    <li className="bi bi-caret-right-fill">
                        <a
                            className="py-1 px-2 d-inline-block text-decoration-none fs-5 text-dark fw-bold"
                            href="/payment-history"
                            target="_blank"
                        >
                            Payment History
                        </a>
                    </li>
                    <li className="bi bi-caret-right-fill">
                        <a
                            className="py-1 px-2 d-inline-block text-decoration-none fs-5 text-dark fw-bold"
                            href="/dashboard"
                            target="_blank"
                        >
                            dashboard
                        </a>
                    </li>
                    <li className="bi bi-caret-right-fill">
                        <a
                            className="py-1 px-2 d-inline-block text-decoration-none fs-5 text-dark fw-bold"
                            href="/sign-up"
                            target="_blank"
                        >
                            Get Started
                        </a>
                    </li>
                    <li className="bi bi-caret-right-fill">
                        <a
                            className="py-1 px-2 d-inline-block text-decoration-none fs-5 text-dark fw-bold"
                            href="/login"
                            target="_blank"
                        >
                            Login
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default AllPages;























