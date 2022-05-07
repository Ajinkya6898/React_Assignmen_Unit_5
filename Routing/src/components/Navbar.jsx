import { Link } from "react-router-dom";


export const Navbar = () =>{
     const nav = [
          {title:"Home",to: "/"},
          {title:"About" ,to: "/about"},
          {title:"users" ,to: "/users"}
     ];

     return (
          <div>
               <Link to="/" style={{margin:"10px", color:"red", }}>Home</Link>
               <Link to="/about" style={{margin:"10px", color:"red", }}>About</Link>
               <Link to="/users" style={{margin:"10px", color:"red", }}>Users</Link>
          </div>
     );
};