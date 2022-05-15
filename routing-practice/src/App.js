import React from "react";
import './App.css';
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Link 
} from "react-router-dom";

const Home = () => { 
  return (
    <h1>Welcome</h1>
  );
}

const Number = () => { 
  return (
    <h1>This number is: 4</h1>
  );
}

const Hello = () => { 
  return (
    <h1>The word is: hello</h1>
  );
}
    
const HelloBlue = () => {
  return (
    <h1 style={{color: "blue", background: "red"}}>About Component</h1>
  );
}

function App() {
  return (
    <div>
      <BrowserRouter>
      <h1>Routing Example</h1>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/4" element={<Number />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/hello/blue/red" element={<HelloBlue />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
