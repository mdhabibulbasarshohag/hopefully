import "./GetStarted.css";

const GetStarted = () => {
    return (
        <section className="sh--get--started">
            <div className="container mx-auto">
                <div className="sh--get--started--header">
                    <h3 className="subHeader">How to get started?</h3>
                </div>
                <div className="sh--get--started--body">
                    <div className="sh--get--started--line">
                        <div className="sh--get--started--line--item"></div>
                        <div className="sh--get--started--line--item"></div>
                        <div className="sh--get--started--line--item"></div>
                    </div>
                    <div className="sh--get--started--content">
                        <div className="sh--get--started--item">
                            <h3 className="sh--get--started--item--step"> 01</h3>
                            <h5 className="sh--get--started--item--title">Registration</h5>
                        </div>
                        <div className="sh--get--started--item">
                            <h3 className="sh--get--started--item--step"> 02</h3>
                            <h5 className="sh--get--started--item--title">replenishment</h5>
                        </div>
                        <div className="sh--get--started--item">
                            <h3 className="sh--get--started--item--step"> 03</h3>
                            <h5 className="sh--get--started--item--title">opening a deposit</h5>
                        </div>
                        <div className="sh--get--started--item">
                            <h3 className="sh--get--started--item--step"> 04</h3>
                            <h5 className="sh--get--started--item--title">making a profit</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;