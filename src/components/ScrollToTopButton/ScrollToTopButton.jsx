import { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; // Import CSS for styling

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleScroll = () => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button
            className={`scroll-to-top-btn ${isVisible ? 'show' : 'hide'}`}
            onClick={scrollToTop}
        >
            <i className="fa fa-arrow-up"></i>
        </button>
    );
};

export default ScrollToTopButton;
