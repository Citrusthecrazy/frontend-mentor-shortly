import "./styles/App.css";
import { CTA, Footer, Hero, Navbar, Statistics } from "./widgets";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Statistics />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
