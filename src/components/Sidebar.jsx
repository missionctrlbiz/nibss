// Sidebar.jsx
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className="sidebar pe-4 pb-3">
            <nav className="navbar bg-light navbar-light">
                <NavLink to="/" className="navbar-brand mx-4 mb-3">                                <img src="/nibbs_logo.png" alt="NIBSS Logo" className="me-2" style={{ height: '30px' }} />
</NavLink>
                <div className="d-flex align-items-center ms-4 mb-4">
                    <div className="position-relative">
                        <img className="rounded-circle" src="/user.jpg" alt="User" style={{ width: '40px', height: '40px' }} />
                        <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div className="ms-3">
                        <h6 className="mb-0">John Doe</h6>
                        <span>Admin</span>
                    </div>
                </div>
                <div className="navbar-nav w-100">
                    <NavLink exact to="/" className="nav-item nav-link" activeClassName="active"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</NavLink>
                    <NavLink to="/billers" className="nav-item nav-link" activeClassName="active"><i className="fa fa-building me-2"></i>Billers</NavLink>
                    <NavLink to="/mandates" className="nav-item nav-link" activeClassName="active"><i className="fa fa-file-signature me-2"></i>Mandates</NavLink>
                    <NavLink to="/transactions" className="nav-item nav-link" activeClassName="active"><i className="fa fa-exchange-alt me-2"></i>Transactions</NavLink>
                    <NavLink to="/reports" className="nav-item nav-link" activeClassName="active"><i className="fa fa-chart-bar me-2"></i>Reports</NavLink>
                    <NavLink to="/settings" className="nav-item nav-link" activeClassName="active"><i className="fa fa-cogs me-2"></i>Settings</NavLink>
                    <NavLink to="/features" className="nav-item nav-link" activeClassName="active"><i className="fa fa-tools me-2"></i>Features</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;