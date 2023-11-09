import Home from "./pages/Home";
import "../src/dist/styles.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Coin from "./pages/Coin";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
