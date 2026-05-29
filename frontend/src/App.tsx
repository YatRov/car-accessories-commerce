import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import ScrollToTop from "./components/ScrollToTop";
import Registration from "./pages/registration";

function App() {
  return(
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;