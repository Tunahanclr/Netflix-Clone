import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Auth from "./components/Auth"
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Auth/>}/>
      <Route path="/browse" element={<Navbar/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
