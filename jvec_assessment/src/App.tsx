import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import { Navigation } from "./components/shared/navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
