import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Main from "./views/Main";
import DetailedProduct from './components/DetailedProduct';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route element= { <Main/> } path="/" />
            <Route element= { <DetailedProduct/> } path="/product/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;