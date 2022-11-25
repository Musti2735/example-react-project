import './App.css';
import React, { useEffect, useState } from "react";
import { HelloContext } from './contexts/HelloWorld'
import Navi from './components/Navi';
import Home from './pages/Home';
import { Route ,Routes } from "react-router-dom";
import Products from "./pages/Product";


function App() {
  const [theme, setTheme] = useState('light')

  const data = { theme, setTheme }

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <HelloContext.Provider value={data}>
      <Navi/>
      <div className="App">
      <Routes>
      <Route path="/" exact element={<Home/>}>
        </Route>
        <Route path="/products" element={<Products/>}>
        </Route>
      </Routes>



      </div>
    </HelloContext.Provider>
  );

}

export default App;
