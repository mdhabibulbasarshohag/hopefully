
import "./Partner.css";


const Partner = () => {

    const bins = [
        { id: 1, name: "Loot Bin 1", value: "1000$", commission: "7%" },
        { id: 2, name: "Loot Bin 2", value: "1500$", commission: "5%" },
        { id: 3, name: "Loot Bin 3", value: "2000$", commission: "7%" },
        { id: 4, name: "Loot Bin 4", value: "2500$", commission: "8%" },
        { id: 5, name: "Loot Bin 5", value: "3500$", commission: "10%" },
        { id: 6, name: "Loot Bin 6", value: "5000$", commission: "12%" },

    ];

    return (
        <section className="nr--partner--wrapper">
            <div className="container mx-auto">
                <div className="nr--partner--main">
                    <div className="nr--partner--header">
                        <h3 className="subHeader">Partners bonus: 6% - 2% - 1%</h3>
                        <p className="aboutBotTweentyFourPx">
                            {" "}
                            <span>*</span> turnover of first-line personal partners.
                        </p>
                    </div>
                    <div className="nr--partner--body">
                        <div className="nr--partner--content">
                            {bins.map((bin) => (
                                <div className="nr--partner--item" id={`nr--partner--item--${bin.id}`} key={bin.id}>
                                    <div className="nr--partner--body--main" id={`nr--partner--body--main--${bin.id}`}>
                                        <div className="nr--partner--item--header">
                                            <h5>{bin.name}</h5>
                                        </div>
                                        <div className="nr--partner--item--content">
                                            <h3>{bin.value}</h3>
                                            <p>{bin.commission}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partner;