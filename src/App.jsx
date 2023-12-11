import Header from "./components/header/header.component";
import Hero from "./components/hero/hero.component";
import './App.css'
import Companies from "./components/companies/companies.component";
import Residencies from "./components/residencies/residencies.component";
import Value from "./components/value/value.component";
import GetStarted from "./components/getstarted/getstarted.component";
import Footer from "./components/footer/footer.component";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
