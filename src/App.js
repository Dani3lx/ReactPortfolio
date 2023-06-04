
import './App.css';

import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';


import snowflake from './images/snowflake.svg'
import fan from './images/Fan.svg'
import AllRoutes from './components/AllRoutes';


function App() {
  useEffect(() => {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray;
    const particleSpeed = 5;

    let mouse = {
      x: null,
      y: null,
      radius: (canvas.height / 95) * (canvas.width / 95)
    };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    // Create particle
    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      // Draw individual particle
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y + this.size > canvas.height) {
          this.y = 0;
        }

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius + this.size) {
          if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
            this.x += particleSpeed;
          }
          if (mouse.x > this.x && this.x > this.size * 10) {
            this.x -= particleSpeed;
          }
          if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
            this.y += particleSpeed;
          }
          if (mouse.y > this.y && this.y > this.size * 10) {
            this.y -= particleSpeed;
          }
        }

        this.x += this.directionX / 3;
        this.y += this.directionY / 3;

        this.draw();
      }
    }

    function init() {
      particlesArray = [];
      let numberOfParticles = window.innerHeight / 5;
      let windowWidth = window.innerWidth;
      let windowHeight = window.innerHeight;

      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 5) + 1;
        let x = (Math.random() * (windowWidth - size * 2)) + size;
        let y = (Math.random() * (windowHeight - size * 2)) + size;
        let directionX = (Math.random() * 5) - 2.5;
        let directionY = (Math.random() * 5);
        let color = '#C3DBFF';

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
    }

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      mouse.radius = (canvas.height / 95) * (canvas.width / 95);
      init();
    })

    window.addEventListener('mouseout', () => {
      mouse.x = undefined;
      mouse.y = undefined;
    })

    init();
    animate();
  }, [])

  return (
    <>
      <Router>
        <canvas id='canvas1'>
        </canvas>
        <NavBar />
        <img src={snowflake} alt='snowflake' id='snowflake-img'></img>
        <img src={fan} alt='fan' id='fan-img'></img>
        <AllRoutes />
      </Router>
    </>
  );
}

export default App;
