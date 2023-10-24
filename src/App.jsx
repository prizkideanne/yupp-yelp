import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./modules/Home";
import BusinessDetails from "./modules/BusinessDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:alias" element={<BusinessDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
