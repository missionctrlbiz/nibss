import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
            <a href="/" className="navbar-brand d-flex d-lg-none me-4">
                <h2 className="text-primary mb-0"><i className="fa fa-hashtag"></i></h2>
            </a>
            <a href="/" className="sidebar-toggler flex-shrink-0">
            <FontAwesomeIcon icon={faBars} />
            </a>
            <div className="navbar-nav align-items-center ms-auto">
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                        <img className="rounded-circle me-lg-2" src="/user.jpg" alt="" style={{ width: "40px", height: "40px" }} />
                        <span className="d-none d-lg-inline-flex">John Doe</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                        <a href="#" className="dropdown-item">My Profile</a>
                        <a href="#" className="dropdown-item">Settings</a>
                        <a href="#" className="dropdown-item">Log Out</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;