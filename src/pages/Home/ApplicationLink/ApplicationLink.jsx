import "./ApplicationLink.css";

import PlayStoreVector from "../../../images/google-play.png";
import AppStoreVector from "../../../images/app-store.png";

const ApplicationLink = () => {
    return (
        <section className="sh--application--link--section">
            <div className="container mx-auto">
                <div className="sh--application--link--header">
                    <h2 className="subHeader">
                        A click away with The Lexium App
                    </h2>
                    <p className="tweentyPxText mt-6">Our goal is to create a fully native version of the platform application to provide the easiest trading process directly on your device. With the help of the application, users will be able to stay connected to our system, access personal funds in real time. Get ready to make profits more efficiently with our new mobile application.</p>
                </div>
                <div className="sh--application--link--body">
                    <div className="sh--application--link--coming">
                        <p>* *COMING SOON* *</p>
                    </div>
                    <div className="sh--application--link--download">
                        <a href="https://play.google.com/store/apps/details?id=com.lexium.app" target="_blank" rel="noopener noreferrer">
                            <img src={PlayStoreVector} alt="" />
                        </a>
                        <a href="https://apps.apple.com/us/app/lexium/id1609002559" target="_blank" rel="noopener noreferrer">
                            <img src={AppStoreVector} alt="" />
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ApplicationLink;