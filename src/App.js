import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header"; 
import Home from "./components/Home"; 
import Exchanges from "./components/Exchanges"; 
import Coins from "./components/Coins"; 
import CoinDetails from "./components/CoinDetails";
import Footer from "./components/Footer";

function App() {
  return <Router>
    <Header />
    <Routes>

      <Route path="/" element={<Home />}/>
      <Route path="/Exchanges" element={<Exchanges />}/>
      <Route path="/Coins" element={<Coins />}/>
      <Route path="/Coin/:id" element={<CoinDetails />}/>

    </Routes>
    <Footer/>
  </Router>
    
  
}

export default App;
