import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddCar from "./components/AddCar";
import AddStudent from "./components/AddStudent";
import DeleteStudent from "./components/DeleteStudent";
import DisplayAll from "./components/DisplayAll";
import SearchStudent from "./components/SearchStudent";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayAll />} />
          <Route path="/s-add" element={<AddStudent />} />
          <Route path="/del" element={<DeleteStudent />} />
          <Route path="/search" element={<SearchStudent />} />
          <Route path="/addCar" element={<AddCar />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}