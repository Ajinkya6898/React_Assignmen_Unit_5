import { CartContext } from "../contexts/CartContext";

import { useContext } from "react";

export const Navbar = () => {
     const { cart } = useContext(CartContext);
     return(
          <nav
               style={{
                    display: "flex",
                    justifyContent:"center",
                    padding: "10px",
                    fontSize:"20px",
                    color: "red",
                    marginRight:"50px",
                    border: "1px solid black"
               }}
          >
               Cart :{cart}  </nav>
     );
};