import "./styles/App.css";
import { CTA, Hero, Navbar, Statistics } from "./widgets";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Statistics />
      <CTA />
    </div>
  );
};

export default App;
