import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BacaQuran from "./pages/bacaQuran/BacaQuran";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import JadwalSholat from "./pages/JadwalSholat";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Detail from "./pages/detail/Detail";
import Signout from "./pages/signout/Signout";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bacaquran" element={<BacaQuran />} />
          <Route path="/surah/:id" element={<Detail />} />
          {/* <Route path="/jadwalsholat" element={<JadwalSholat />} /> */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signout" element={<Signout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
