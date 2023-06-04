import React from 'react'
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import HomePage from './pages/HomePage';

import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'

function AllRoutes() {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
            </Routes>
        </AnimatePresence>

    )
}

export default AllRoutes