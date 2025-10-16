import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Frames from './components/Frames';
import Lenses from './components/Lenses';
import Brands from './components/Brands';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-['Inter']">
        <Header />
        <main className='overflow-hidden'>
          <Hero />
          <Frames />
          <Lenses />
          <Brands />
          <Reviews />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  );
}

export default App;

