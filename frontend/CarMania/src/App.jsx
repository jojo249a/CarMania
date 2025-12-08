import { Routes, Route } from "react-router-dom"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import Home from "./pages/Home"
import Offers from "./pages/Offers"

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
      <Footer />
    </>
  )
}
