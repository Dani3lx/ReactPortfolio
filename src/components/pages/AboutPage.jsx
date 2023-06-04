import React from 'react';
import { motion } from 'framer-motion';

function AboutPage() {
    return (
        <motion.div
        initial={{opacity: 0, width: 0}}
        animate={{opacity: 1, width: "100%"}}
        exit={{opacity: 0, width: "100%"}}>
            <div className='about__container'>
                <div className='about__card'>
                    <h1 className='about__title'>Hi, I'm Daniel! 👋</h1>
                    <p className='about__text'>
                        I'm a third year undergraduate student studying at the University of Toronto and is in the Computer Science Specialist program. My interest includes data science, full stack developments, game design, as well as web development.
                        <br></br>
                        <br></br>
                        In my free time, I enjoy learning new tools and technologies and applying them to make cool things. Currently I'm learning about Figma and React JS (which are both used in the creation of this site!) Feel free to check out what I have made so far in the <a href='/portfolio' className='menu-link'>portfolio</a> section :)
                        <br></br>
                        <br></br>
                        My other hobbies includes playing the piano 🎹, playing competitive online games 🎮(Starter on the UofT varsity silver overwatch team) and playing badminton 🏸.
                        <br></br>
                        <br></br>
                        Fun fact: Winter is my favourite season ❄️.
                    </p>
                </div>
            </div>
        </motion.div>)
}

export default AboutPage;