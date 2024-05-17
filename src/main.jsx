//main.jsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Assuming App.jsx is in the same directory
import './index.css'; // Add any global CSS here
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap stylesheet
// import 'waypoints/lib/noframework.waypoints'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css'
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'owl.carousel';
import 'moment';
import 'jquery'
import './styles/bootstrap.min.css'
// import 'tempusdominus-bootstrap-4/build/js/tempusdominus-bootstrap-4.min.js';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);