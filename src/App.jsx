import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Cart from "./Pages/Cart";
import Products from "./Pages/Products";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
  <Router>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/products" element={<Products/>} />
    </Routes>
     <Footer/>
    {/* { location.pathname !=='/cart' && <Footer/>} */}
  </Router>
  );
}

export default App;
