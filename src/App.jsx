import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
// import Services from './components/services/Services';
import Protfolio from './components/protfolio/Protfolio';
import Recommendation from './components/recommendation/Recommendation';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {

  return (
    <>
      <Header />
      <Nav />
      <About />
      {/* <Services /> */}
      <Protfolio />
      <Experience />
      <Recommendation />
      <Contact />
      <Footer />
    </>
  )
}

export default App
