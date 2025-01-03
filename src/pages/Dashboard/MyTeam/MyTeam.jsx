import { NavLink, Outlet } from "react-router-dom";
import "./MyTeam.css"

const MyTeam = () => {
    return (
        <>
            <div className="sm-myteam-item">
                {/* My team Top */}
                <div className="sm-myteam-item-top">
                    <div className="sm-myteam-item-top-item">
                        <h6 className="sm-myteam-item-top-item-title">Inviter</h6>
                        <h3 className="sm-myteam-item-top-item-value">hofnar05</h3>
                    </div>
                    <div className="sm-myteam-item-top-item">
                        <h6 className="sm-myteam-item-top-item-title">Name</h6>
                        <h3 className="sm-myteam-item-top-item-value">hofnar05</h3>
                    </div>
                    <div className="sm-myteam-item-top-item">
                        <h6 className="sm-myteam-item-top-item-title">Email</h6>
                        <h3 className="sm-myteam-item-top-item-value">
                            hofnar05.cc@gmail.com
                        </h3>
                    </div>
                </div>
                {/* My team Bottom */}

                <div className="sm-myteam-item-bottom">
                    <div className="sm-myteam-item-bottom-item">
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? "sm-team-nav-tab-btn active" : "sm-team-nav-tab-btn"}
                            to="/dashboard/my-team" end>

                            Level 1
                        </NavLink>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? "sm-team-nav-tab-btn active" : "sm-team-nav-tab-btn"}
                            to="/dashboard/my-team/level-2">
                            Level 2
                        </NavLink>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? "sm-team-nav-tab-btn active" : "sm-team-nav-tab-btn"}
                            to="/dashboard/my-team/level-3">
                            Level 3
                        </NavLink>
                    </div>
                    {/* Tab Content */}
                    <div className="sm-myteam-item-bottom-tab-content">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyTeam;