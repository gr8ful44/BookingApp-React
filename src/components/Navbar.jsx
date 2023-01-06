import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
   const navigate = useNavigate();
   const goHomeBtn = function () {
      navigate("/");
   };

   return (
      <div className="navbar flex">
         <div className="navContainer flex">
            <span className="logo" onClick={goHomeBtn}>
               Hotel Booking
            </span>
            <div className="navbtn-Con">
               <button className="navBtn">Register</button>
               <button className="navBtn">Login</button>
            </div>
         </div>
      </div>
   );
}

export default Navbar;
