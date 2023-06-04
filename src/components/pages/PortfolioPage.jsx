import { useEffect } from 'react';
import { motion } from 'framer-motion';
import project1__pic from '../../images/portfolio.png'
import project2__pic from '../../images/videoEntertainmentProject.png'
import project3__pic from '../../images/Covision.png'


function Project(props) {
  const allSkills = props.skills;
  const skillItems = allSkills.map((skill) => {
    return <li className='portfolio__skill'>{skill}</li>
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <section className='portfolio__container hidden'>
        <div className='portfolio__text'>
          <h2 className='portfolio__title'>{props.title}</h2>
          <p className='portfolio__description'>{props.descri}</p>
          <ul className='portfolio__skills'>
            {skillItems}
          </ul>
        </div>
        <div className='portfolio__img'>
          <img src={props.pic} alt='portfolio website project' ></img>
          <div className='portfolio__link'>
            <a href={props.link} className='portfolio__link-name' target='_blank' rel="noreferrer">Learn more on github <i class="uil uil-external-link-alt"></i></a>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

function PortfolioPage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((elem) => observer.observe(elem));
  }, [])

  return (
    <>
      <section className='portfolio'>
        <h1 className='heading'>Projects.</h1>
        <Project
          title="Portfolio Website"
          descri="My previous portfolio website"
          skills={["HTML", "CSS", "Javascript"]}
          pic={project1__pic}
          link="https://github.com/Dani3lx/Portfolio"
        />

        <Project
          title="Video-Entertainment-System"
          descri="Java-based command-line video sharing application that facilitated video creation, sharing, and user engagement."
          skills={["Java", "Git"]}
          pic={project2__pic}
          link="https://github.com/Dani3lx/Video-Entertainment-System/tree/master/phase2"
        />

        <Project
          title="CO(VISION)"
          descri="Python-based application that analyzes the impact of COVID-19 on various industries."
          skills={["Python", "Pygame", "Matplotlib", "Git"]}
          pic={project3__pic}
          link="https://github.com/victor-zheng-codes/CSC110-Project"
        />

        <h1 className='heading'>More coming soon!</h1>
      </section>
    </>
  );
}

export default PortfolioPage;