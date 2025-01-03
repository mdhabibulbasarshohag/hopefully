import bot from "../../../images/robotoInvestments--main.png";
import "./AffiiliateLink.css";

const affiliateData = [
    {
        id: 1,
        size: "Size 728*90",
        description: "THE AI CREATED TRADING BOT THAT NEVER MISSES",
        image: bot,
    },
    {
        id: 2,
        size: "Size 728*90",
        description: "THE AI CREATED TRADING BOT THAT NEVER MISSES",
        image: bot,
    },
    {
        id: 3,
        size: "Size 728*90",
        description: "THE AI CREATED TRADING BOT THAT NEVER MISSES",
        image: bot,
    },
    {
        id: 4,
        size: "Size 728*90",
        description: "THE AI CREATED TRADING BOT THAT NEVER MISSES",
        image: bot,
    },
];

const AffiliateLink = () => {


    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert("Copied to clipboard!");
            })
            .catch((err) => {
                console.error("Failed to copy: ", err);
            });
    };




    return (
        <div className="sl-dashboard-item">
            <div className="sl-dashboard-item__header">
                <div className="affiliate-card-item">
                    <div className="affiliate-card-left">
                        <p>Your Referral Link</p>
                        <h5 className="copy-text">
                            <a
                                href="https://sdcfec.vfefe/?sdec=dmweq"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://sdcfec.vfefe/?sdec=dmweq
                            </a>
                        </h5>
                        <button
                            className="copy-btn"
                            onClick={() => copyToClipboard("https://sdcfec.vfefe/?sdec=dmweq")}
                        >
                            Copy
                        </button>
                    </div>
                    <div className="affiliate-card-middle"></div>
                    <div className="affiliate-card-right">
                        <p>The Number of Clicks on the Link</p>
                        <h3>0</h3>
                    </div>
                </div>
            </div>
            <div>
                {affiliateData.map((item) => (
                    <div className="affiliate-card-item" key={item.id}>
                        <div className="affiliate-card-left">
                            <h5 className="copy-text">{item.size}</h5>
                            <button
                                className="copy-btn"
                                onClick={() => copyToClipboard(item.size)}
                            >
                                Copy
                            </button>
                        </div>
                        <div className="affiliate-card-middle">
                            <h4>{item.description}</h4>
                        </div>
                        <div className="affiliate-card-right">
                            <div className="bot-image">
                                <img src={item.image} alt="Trading Bot" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AffiliateLink;
