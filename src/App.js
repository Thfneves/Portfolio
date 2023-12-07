import "./App.css";
import Navbar from "./componentes/section/Navbar";
import Presentation from "./componentes/section/Presentation";
import Skill from "./componentes/section/skill";
import Project from "./componentes/section/Project";
import Footer from "./componentes/section/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Presentation />
      <Skill />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
