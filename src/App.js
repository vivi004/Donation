import Header from "./Components/Home/Header/Header";
import NeedsPage from "./Components/Home/Helps/NeedsPage";
import Login from "./Components/Auth/Login/Login";
import Reg from "./Components/Auth/Register/Register";
import Donation from "./Components/Donation/Donation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          <Route index element={<Header />} />
          <Route path="/need" element={<NeedsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Reg />} />
          <Route path="/donating" element={<Donation />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App; 