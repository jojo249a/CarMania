import { Routes, Route } from "react-router-dom"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import Home from "./pages/Home"
import NewOffers from "./pages/NewOffers"
import UsedOffers from "./pages/UsedOffers"
import SalesHistory from "./pages/SalesHistory"

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/used-cars" element={<UsedOffers />} />
        <Route path="/new-cars" element={<NewOffers />} />
        <Route path="/sales-history" element={<NewOffers />} />
      </Routes>
      <Footer />
    </>
  )
}
