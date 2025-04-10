import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import { Navigation } from "./components/shared/navigation";
import Footer from "./components/shared/footer";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
