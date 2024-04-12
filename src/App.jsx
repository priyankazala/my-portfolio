import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Skills } from "./components/Skills/skills";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Contact} from "./components/Contact/Contact";

function App() {
  return (
    <div className={styles.App}>
      <div className="styles.main">
      <Hero />
      <About />
      <Skills/>
      <Experience />
      <Projects />
      <Contact/>
     
      
      </div>
      <div><Navbar /></div>
    </div>
  );
}

export default App;
