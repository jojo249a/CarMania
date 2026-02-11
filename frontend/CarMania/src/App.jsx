import { Routes, Route, useLocation } from "react-router-dom"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import Home from "./pages/Home"
import NewOffers from "./pages/NewOffers"
import UsedOffers from "./pages/UsedOffers"
import SalesHistory from "./pages/SalesHistory"
import Car from "./pages/Car"
import ShowroomOstrava from "./pages/ShowroomOstrava"
import ShowroomZilina from "./pages/ShowroomZilina"
import Contact from "./pages/Contact"
import { useEffect } from "react"

export default function App() {
  const { pathname } = useLocation();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    scrollToTop()  
  }, [pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/used-cars" element={<UsedOffers />} />
        <Route path="/new-cars" element={<NewOffers />} />
        <Route path="/sales-history" element={<SalesHistory />} />
        <Route path="/car/:slug" element={<Car />} />
        <Route path="/showroom/ostrava" element={<ShowroomOstrava />} />
        <Route path="/showroom/zilina" element={<ShowroomZilina />}/>
        <Route path="/contact" element={<Contact /> }/>
      </Routes>
      <Footer />
    </>
  )
}
