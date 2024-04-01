
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./routes/Home"
import Sobre from "./routes/Sobre"
import Figurinos from "./routes/Figurinos"
import Festas from "./routes/Festas"
import Autorais from "./routes/Autorais"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/figurinos" element={<Figurinos />} />
        <Route path="/festas" element={<Festas />} />
        <Route path="/autorais" element={<Autorais />} />
      </Routes>
    </Router>
  )
}

export default App;
