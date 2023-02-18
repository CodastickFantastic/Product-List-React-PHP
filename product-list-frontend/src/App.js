import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.page";
import Footer from "./components/Footer/Footer.component";
import AddProduct from "./pages/AddProduct.page";
import { MassDeleteContextProvider } from "./contexts/MassDelete.context";

function App() {
  return (
    <div className="App">
      <MassDeleteContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/add-product" element={<AddProduct />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MassDeleteContextProvider>
    </div>
  );
}

export default App;
