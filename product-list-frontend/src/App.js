import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation.component";
import Home from "./pages/Home.page";
import Footer from "./components/Footer/Footer.component";
import AddProduct from "./pages/AddProduct.page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
