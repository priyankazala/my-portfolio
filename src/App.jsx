import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Skills } from "./components/Skills/skills";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <div className="styles.main">
      <Hero />
      <About />
      <Skills/>
      <Experience />
      <Projects />
     
      
      </div>
      <div><Navbar /></div>
    </div>
  );
}

export default App;
