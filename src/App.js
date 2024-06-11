import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div>
      <div id="wrappers">
        <Header />
        <Projects />
        <Skills />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
