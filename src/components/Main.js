import React, {useContext} from "react";
import { HelloContext } from "../contexts/HelloWorld";

function Main(){
    const {theme} = useContext(HelloContext)

return <div>
    <h2>Main</h2>
    <h3>{theme}</h3>

</div>

}

export default Main;