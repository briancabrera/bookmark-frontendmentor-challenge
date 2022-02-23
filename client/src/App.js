import Navbar from "./Components/Navbar/Navbar.jsx"
import Landing from "./Components/Landing/Landing.jsx"
import Features from "./Components/Features/Features.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
