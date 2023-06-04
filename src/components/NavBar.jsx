import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Backdrop = ({ children }) => {
    return (
        <motion.div
            className='backdrop'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    );
};

const popIn = {
    hidden: {
        y: "100vh",
        opacity: 0,
    },
    visible: {
        x: 0,
        y: 0,
        opacity: 1,
        duration: "0.1",
    },
    exit: {
        y: "100vh",
        opacity: 0,
    }
};

const NavMenu = () => {

    useEffect(() => {
        document.body.classList.add("lock");
        document.getElementById("toggle-btn").innerHTML = "<i class='uil uil-multiply'></i>";

        const menu = document.getElementById("nav-menu");

        Array.from(document.getElementsByClassName("nav-item"))
            .forEach((item, index) => {
                item.onmouseover = () => {
                    menu.dataset.activeIndex = index;
                }
            });

        return function cleanup() {
            document.getElementById("toggle-btn").innerHTML = "<i class='uil uil-snowflake'></i>";
            document.body.classList.remove("lock");
        };
    }, [])
    return (
        <Backdrop>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                id='nav-menu'
                variants={popIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <a className='nav-item' href='/'>Home</a>
                <a className='nav-item' href='/about'>About</a>
                <a className='nav-item' href='/portfolio'>Projects</a>
                <div className='nav-menu-background'></div>
            </motion.div>
        </Backdrop>
    );
};

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const close = () => setMenuOpen(false);
    const open = () => setMenuOpen(true);

    return (
        <>
            <motion.button
                id='toggle-btn'
                onClick={() => (menuOpen ? close() : open())}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <i className="uil uil-snowflake"></i>
            </motion.button>

            <AnimatePresence
                initial={false}
                mode='wait'
                onExitComplete={() => null}>
                {menuOpen && <NavMenu />}
            </AnimatePresence>
        </>
    );
}

export default NavBar;