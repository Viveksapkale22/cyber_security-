import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import  Footer from './components/Footer';
import  MedContain from './components/MedContain';

function App() {
  return (
    <>
     <div>
      <Navbar />
    </div>
    <Header/>
    <MedContain/>
    <Footer/>
    </>
  );
}

export default App;
