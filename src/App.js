import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero';
import PageContextProvider from './Contexts/PageContext';
import AboutUs from './Components/AboutUs';
import Menu from './Components/Menu';
import MapProvider from './Components/MapProvider';
import Footer from './Components/Footer.jsx';
import Tags from './Components/Tags.jsx';


function App() {
  return (
    <div className="App ">
      <PageContextProvider>
        
        <Hero />
        <Tags />
        <AboutUs />
        <Menu />
        <MapProvider />
        <Footer />
      </PageContextProvider>


    </div>
  );
}

export default App;
