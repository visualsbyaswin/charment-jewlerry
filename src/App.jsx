import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Navbar from "./components/Navbar/Navbar";
import Uselenis from "./Animations/LenisScroll/lenis";
import Footer from "./components/Footer/Footer";

import Bridal from "./pages/BridalBliss/Bridal";
import Timeless from "./pages/TimeLess/Timeless";
import Minimal from "./pages/MinimalElegence/Minimal";
import Shop from "./pages/shop/Shop";
import ScrollToTop from "./Animations/Scrolltop/ScrollTop";
import Page6 from "./Animations/Page6";
import Checkout from "./pages/Checkout/Checkout";
import Contact from "./pages/Contact/Contact";

function App() {
  Uselenis();
  return (
    <>
      <main>
      <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/charment-jewlerry" element={<Home />} />
          <Route path="/charment-jewlerry/minimalelegence" element={<Minimal />} />
          <Route path="/charment-jewlerry/bridalbliss" element={<Bridal />} />
          <Route path="/charment-jewlerry/timelessclassics" element={<Timeless />} />
          <Route path="/charment-jewlerry/shop" element={<Shop />} />
          <Route path="/charment-jewlerry/checkout/:slug" element={<Checkout />} />

          <Route path="/charment-jewlerry/contact" element={<Contact />} />
        </Routes>
        <Page6 />
      </main>
      <Footer />
    </>
  );
}

export default App;
