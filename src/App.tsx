import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
