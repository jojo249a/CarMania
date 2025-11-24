import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./components/Home"
import Shop from "./components/Shop"
import Admin from "./components/Admin"

export default function App() {
  return (
    <>
      <Nav />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </div>
    </>
  )
}
