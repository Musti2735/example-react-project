import React, { useContext } from "react";
import { Link } from "react-router-dom";


function Navi() {
    return <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>

            </ul>
        </nav>
    </div>

}

export default Navi;