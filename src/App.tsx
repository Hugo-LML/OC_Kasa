import './styles/styles.scss';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Rental from './pages/Rental';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/rentals/:rentalId" element={<Rental />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
