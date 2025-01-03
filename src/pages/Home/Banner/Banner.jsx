import "./Banner.css";

// import bannerRightFreame from "../../../images/bannerRightFreame.png";

const Banner = () => {
    return (
        <>
            <section className="nr--banner--wrapper">
                <div className="container mx-auto">
                    <div className="content--wrapper">
                        <div className="profit--to--day--main">
                            <h5 className="tweentyPxText">
                                Profit to day <span>4.34%</span>
                            </h5>
                        </div>
                        <div className="nr--header--main">
                            <h1 className="mainHeader">
                                Automated Trading, <br />
                                Fully Built By AI
                            </h1>
                            <p className="tweentyFourPx">
                                Buy, sell, and grow your crypto with Loot Bin.AI,
                                the&nbsp;platform&nbsp;dedicated to&nbsp;every trader at every level.
                            </p>
                            <div className="nr--getStrated--banner">
                                <div className="nr--getStrat--btn">
                                    <a href="#">Get Strated</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="nr--baner--rightFreame">
                    <img src={bannerRightFreame} alt="not found" />
                </div> */}
            </section>
        </>
    );
};

export default Banner;