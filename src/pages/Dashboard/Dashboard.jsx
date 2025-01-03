import "./Dashboard.css"
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <section
            className="sl-dashboard-section"
        >
            <div className="container mx-auto">
                <div className="sl-dashboard-container ">
                    <div className="sh-dashboard-menu">
                        <NavLink
                            to="/dashboard"
                            end
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "sh-dashboard-menu-item-active" : "sh-dashboard-menu-item"
                            }
                        >
                            <div className="sh-dashboard-menu-item-icon">
                                <img src="/svg/dashboard-icon.svg" alt="" />
                            </div>
                            <span>
                                Dashboard
                            </span>
                        </NavLink>

                        <NavLink
                            to="/dashboard/add-funds"
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "sh-dashboard-menu-item-active" : "sh-dashboard-menu-item"
                            }
                        >
                            <div className="sh-dashboard-menu-item-icon">
                                <img src="/svg/add-fund.svg" alt="" />
                            </div>
                            <span>
                                Add Funds
                            </span>
                        </NavLink>

                        <NavLink
                            to="/dashboard/open-deposit"
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "sh-dashboard-menu-item-active" : "sh-dashboard-menu-item"
                            }
                        >
                            <div className="sh-dashboard-menu-item-icon">
                                <img src="/svg/open-deposit.svg" alt="" />
                            </div>
                            <span>
                                Open deposit
                            </span>

                        </NavLink>
                        <NavLink
                            to="/dashboard/deposits"
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "sh-dashboard-menu-item-active" : "sh-dashboard-menu-item"
                            }
                        >
                            <div className="sh-dashboard-menu-item-icon">
                                <img src="/svg/database.svg" alt="" />
                            </div>
                            <span>
                                Deposits
                            </span>

                        </NavLink>
                        <NavLink
                            to="/dashboard/withdraw"
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "sh-dashboard-menu-item-active" : "sh-dashboard-menu-item"
                            }
                        >
                            <div className="sh-dashboard-menu-item-icon">
                                <img src="/svg/withdrow.svg" alt="" />
                            </div>
                            <span>
                                Withdraw
                            </span>

                        </NavLink>
                        <NavLink
                            to="/dashboard/wallet"
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "sh-dashboard-menu-item-active" : "sh-dashboard-menu-item"
                            }
                        >
                            <div className="sh-dashboard-menu-item-icon">
                                <img src="/svg/wallet.svg" alt="wallet" />
                            </div>
                            <span>
                                Wallet
                            </span>
                        </NavLink>
                        <NavLink
                            to="/dashboard/history"
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "sh-dashboard-menu-item-active" : "sh-dashboard-menu-item"
                            }
                        >
                            <div className="sh-dashboard-menu-item-icon">
                                <img src="/svg/history.svg" alt="" />
                            </div>
                            <span>
                                History
                            </span>
                        </NavLink>
                        <NavLink
                            to="/dashboard/my-team"
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "sh-dashboard-menu-item-active" : "sh-dashboard-menu-item"
                            }
                        >
                            <div className="sh-dashboard-menu-item-icon">
                                <img src="/svg/my-team.svg" alt="" />
                            </div>
                            <span>
                                My team
                            </span>

                        </NavLink>
                        <NavLink
                            to="/dashboard/affiiliate-link"
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "sh-dashboard-menu-item-active" : "sh-dashboard-menu-item"
                            }
                        >
                            <div className="sh-dashboard-menu-item-icon">
                                <img src="/svg/affiliate.svg" alt="" />
                            </div>
                            <span>
                                Affiiliate link
                            </span>

                        </NavLink>
                        <NavLink
                            to="/dashboard/setting"
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "sh-dashboard-menu-item-active" : "sh-dashboard-menu-item"
                            }
                        >
                            <div className="sh-dashboard-menu-item-icon">
                                <img src="/svg/setting.svg" alt="" />
                            </div>
                            <span>
                                Settings
                            </span>

                        </NavLink>
                        <NavLink
                            to="/dashboard/change-password"
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "sh-dashboard-menu-item-active" : "sh-dashboard-menu-item"
                            }
                        >
                            <div className="sh-dashboard-menu-item-icon">
                                <img src="/svg/change-password.svg" alt="" />
                            </div>
                            <span>
                                Change password
                            </span>

                        </NavLink>
                    </div>
                    <div className="sl-dashboard-content">
                        <div className="sl-dashboard-content-wrap">
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;