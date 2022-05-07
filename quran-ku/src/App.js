import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BacaQuran from "./pages/bacaQuran/BacaQuran";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import JadwalSholat from "./pages/JadwalSholat";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Detail from "./pages/detail/Detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bacaquran" element={<BacaQuran />} />
          <Route path="/surah/:id" element={<Detail />} />
          <Route path="/jadwalsholat" element={<JadwalSholat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
