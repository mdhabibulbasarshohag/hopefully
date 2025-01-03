import "./DashboardMain.css";

const DashboardMain = () => {
    const dashboardItems = [
        { id: 1, label: 'Balance', icon: '/svg/dashboard-icon-1.svg', amount: '10.00 USD' },
        { id: 2, label: 'Deposited', icon: '/svg/dashboard-icon-2.svg', amount: '10.00 USD' },
        { id: 3, label: 'Affiliate Bonus', icon: '/svg/dashboard-icon-3.svg', amount: '10.00 USD' },
        { id: 4, label: 'Accrued', icon: '/svg/dashboard-icon-4.svg', amount: '10.00 USD' },
        { id: 5, label: 'Added', icon: '/svg/dashboard-icon-5.svg', amount: '10.00 USD' },
        { id: 6, label: 'Withdrawal', icon: '/svg/dashboard-icon-6.svg', amount: '10.00 USD' }
    ];

    return (
        <div className="sl-dashboard-item">
            <div className="grid grid-cols-2 gap-4">
                {dashboardItems.map((item) => (
                    <div key={item.id}>
                        <div className="sl-dashboard-inner-single-item">
                            <img src={item.icon} alt={`${item.label} icon`} />
                            <p>{item.label}</p>
                            <button>{item.amount}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardMain;
