import './assets/scss/base.scss'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from './Components/Form';
import Table from './Components/Table';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/info" element={<Table />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
