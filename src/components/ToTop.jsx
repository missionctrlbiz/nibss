const ToTop = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top" onClick={handleScrollToTop}>
            <i className="fa fa-arrow-up"></i>
        </a>
    );
};

export default ToTop;