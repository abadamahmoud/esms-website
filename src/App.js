import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Workshops from './components/Workshops';
import Agenda from './components/Agenda';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Form from './components/Form';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <About/>
      <Sponsors/>
      <Workshops/>
      <Contact/>
      <Agenda/>
      <Form />
    </div>
  );
}

export default App;
