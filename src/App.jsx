import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ToTop from './components/ToTop';
import Dashboard from './components/Dashboard/Dashboard';
import Billers from './components/Billers/Billers';
import Mandates from './components/Mandates/Mandates';
import Transactions from './components/Transactions/Transactions';
import Reports from './components/Reports/Reports';
import Settings from './components/Settings/Settings';
import Features from './components/Features/Features';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Router>
            <div className="container-fluid position-relative bg-white d-flex p-0">
                <Sidebar />
                <div className="content">
                <Navbar /> 
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/billers" element={<Billers />} />
                        <Route path="/mandates" element={<Mandates />} />
                        <Route path="/transactions" element={<Transactions />} />
                        <Route path="/reports" element={<Reports />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/features" element={<Features />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <ToTop />
                <Footer /> 
                </div>
            </div>
        </Router>
    );
}

export default App;