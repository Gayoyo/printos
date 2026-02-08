import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoShowcase from './components/VideoShowcase';
import Problems from './components/Problems';
import Solutions from './components/Solutions';
import TargetMarket from './components/TargetMarket';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <VideoShowcase />
      <Problems />
      <Solutions />
      <TargetMarket />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
