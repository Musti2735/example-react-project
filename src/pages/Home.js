import React, { useContext } from "react";
import { HelloContext } from '../contexts/HelloWorld';
import Header from '../components/Header';
import Main from '../components/Main';


function Home() {
    const { theme, setTheme } = useContext(HelloContext)

    return <div>
        <h2>Home</h2>
        <h3>{theme}</h3>
        <Header />
        <Main />

    </div>

}

export default Home;