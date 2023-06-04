import React from 'react'
import snowflake from '../../images/snowflake.svg'
import { motion } from 'framer-motion'


function HomePage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div id='pointer-arrow' className='bounce'>
                <i className="uil uil-arrow-right"></i>
            </div>
            <img src={snowflake} alt='snowflake' id='snowflake-img'></img>
            <div className='header__container'>
                <div>
                    <motion.h1 className='heading' whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}>GREETINGS, TRAVELER!</motion.h1>
                    <motion.h1 className='heading' whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}>WELCOME TO DANIEL'S PORTFOLIO.</motion.h1>
                    <div className="home__social">
                        <motion.a
                            href="https://www.linkedin.com/in/1danielxu/"
                            target="_blank"
                            className="home__social-icon"
                            title="linkedin"
                            rel="noreferrer"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}>
                            <i className="uil uil-linkedin"></i>
                        </motion.a>
                        <motion.a
                            href="https://github.com/Dani3lx"
                            target="_blank"
                            className="home__social-icon"
                            title="github"
                            rel="noreferrer"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <i className="uil uil-github"></i>
                        </motion.a>
                    </div>
                </div>
            </div>
        </motion.div >)
}

export default HomePage;