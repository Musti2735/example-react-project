import React, { useContext } from "react";
import{HelloContext} from '../contexts/HelloWorld'

function Products(){
    const {theme, setTheme} = useContext(HelloContext)

return <div>
    <h2>Products</h2>
    <h3>{theme}</h3>
    <button onClick={()=>setTheme(theme==='light' ? 'dark' : 'light')} >Degistir</button>
</div>

}

export default Products;