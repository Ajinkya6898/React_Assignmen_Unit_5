import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

export const Body = () => {
     const { handleChange } = useContext(CartContext);
     return(
          <div 
          style={{
               width: "100px",
               height: "100px",
               padding: "10px",
               background: "#2591fe",
               color: "white",
               margin: "100px 0 0 100px",
               
          }}
          >
               <button onClick={() => {
                    handleChange(1)
               }}>Add To Cart</button>
          </div>
     );
};