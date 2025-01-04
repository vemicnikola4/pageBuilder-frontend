import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero';
import PageContextProvider from './Contexts/PageContext';
import AboutUs from './Components/AboutUs';
import Menu from './Components/Menu';

function App() {
  return (
    <div className="App ">
      <PageContextProvider>
        
        <Hero />
        <AboutUs />
        <Menu />
      </PageContextProvider>


    </div>
  );
}

export default App;
