import React from 'react';
import '../styles/AboutMe.css';



const AboutMe = () => {
  return (
    <section id="about-me" className="about-me">
      <div className="about-me-content">
        <h2 className="section-title">Hello, I'm Priyanka Zala!</h2>
        <p className="section-subtitle">
          🚀 A web enthusiast and data wrangler exploring the digital universe.
        </p>
        <p>
          Welcome to my world of <span className="highlight">code</span>,{' '}
          <span className="highlight">creativity</span>, and{' '}
          <span className="highlight">continuous learning</span>.
        </p>
        <p>
          Currently pursuing my Masters of Science in Computer Science at{' '}
          <a href="https://www.stevens.edu/" target="_blank" rel="noopener noreferrer">
            Stevens Institute of Technology
          </a>
          , I love transforming ideas into interactive and engaging web experiences.
        </p>
        <p>
          From crafting elegant code with <span className="highlight">ReactJS</span> to diving into the depths of data
          with <span className="highlight">Python</span>, I thrive on challenges that push me to think outside the box.
        </p>
        <p>
          When I'm not coding, you'll find me exploring the latest tech trends, sipping on a cup of coffee ☕, or
          brainstorming my next big project.
        </p>
        <p>
          Ready to embark on a digital journey together? Feel free to reach out at{' '}
          <a href="mailto:pzala@stevens.edu">pzala@stevens.edu</a> or connect with me on{' '}
          <a href="https://www.linkedin.com/in/pzala/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
