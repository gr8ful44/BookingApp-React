import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faBed,
   faCalendarDays,
   faCar,
   faPerson,
   faPlane,
   faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

function Header({ type }) {
   const navigate = useNavigate();
   const [openDate, setOpenDate] = useState(false);
   const [date, setDate] = useState([
      {
         startDate: new Date(),
         endDate: new Date(),
         key: "selection",
      },
   ]);

   const [destination, setDestination] = useState("");
   const [openOptions, setopenOptions] = useState(false);
   const [options, setOptions] = useState({
      adult: 1,
      children: 0,
      room: 1,
   });

   const handleOption = function (name, operation) {
      setOptions((prev) => {
         return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
         };
      });
   };

   const handleSearch = function () {
      navigate("/hotels", { state: { destination, date, options } });
   };

   return (
      <div className="header flex">
         <div
            className={
               type === "list" ? "headerContainer listMode" : "headerContainer"
            }
         >
            <div className="headerList flex">
               <div className="headerListItem flex active">
                  <FontAwesomeIcon icon={faBed} />
                  <span>Stays</span>
               </div>
               <div className="headerListItem flex">
                  <FontAwesomeIcon icon={faPlane} />
                  <span>Flights</span>
               </div>
               <div className="headerListItem flex">
                  <FontAwesomeIcon icon={faCar} />
                  <span>Car Rental</span>
               </div>
               <div className="headerListItem flex">
                  <FontAwesomeIcon icon={faBed} />
                  <span>Attractions</span>
               </div>
               <div className="headerListItem flex">
                  <FontAwesomeIcon icon={faTaxi} />
                  <span>Airport Taxis</span>
               </div>
            </div>
            {type !== "list" && (
               <>
                  <h1 className="headerTitle">
                     A lifetime of discounts? It's Genius.
                  </h1>
                  <p className="headerDesc">
                     Get rewarded for your travels – unlock instant savings of
                     10% or more with a free Lamabooking account
                  </p>
                  <button className="headerBtn pointer">
                     Sign in / Register
                  </button>

                  <div className="headerSearch flex">
                     <div className="headerSearchItem flex">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input
                           type="text"
                           placeholder="Location..."
                           className="headerSearchInput"
                           onChange={(e) => setDestination(e.target.value)}
                        />
                     </div>
                     <div className="headerSearchItem flex">
                        <FontAwesomeIcon
                           icon={faCalendarDays}
                           className="headerIcon"
                        />
                        {/* onclick for set opersite openDate */}
                        <span
                           onClick={() => setOpenDate(!openDate)}
                           className="headerSearchText pointer"
                        >
                           {format(date[0].startDate, "dd/MM/yyyy")} to{" "}
                           {format(date[0].endDate, "dd/MM/yyyy")}
                        </span>

                        {/* add condition for openData, if it's true.. */}
                        {openDate && (
                           <DateRange
                              editableDateInputs={true}
                              onChange={(item) => setDate([item.selection])}
                              moveRangeOnFirstSelection={false}
                              ranges={date}
                              className="date"
                              minDate={new Date()}
                           />
                        )}
                     </div>
                     <div className="headerSearchItem flex">
                        <FontAwesomeIcon
                           icon={faPerson}
                           className="headerIcon"
                        />
                        {/* onclick for set opersite openOptions */}
                        <span
                           onClick={() => setopenOptions(!openOptions)}
                           className="headerSearchText pointer"
                        >
                           {options.adult} adult | {options.children} children |{" "}
                           {options.room} room
                        </span>

                        {/* add condition for openOptions */}
                        {openOptions && (
                           <div className="options">
                              <div className="optionItem flex">
                                 <span className="optionText">Adult</span>
                                 <div className="optionCounter flex">
                                    <button
                                       disabled={options.adult <= 1}
                                       className="optionCounterBtn pointer"
                                       onClick={() =>
                                          handleOption("adult", "d")
                                       }
                                    >
                                       -
                                    </button>
                                    <span className="optionCounterNumber">
                                       {options.adult}
                                    </span>
                                    <button
                                       className="optionCounterBtn pointer"
                                       onClick={() =>
                                          handleOption("adult", "i")
                                       }
                                    >
                                       +
                                    </button>
                                 </div>
                              </div>
                              <div className="optionItem flex">
                                 <span className="optionText">Children</span>
                                 <div className="optionCounter flex">
                                    <button
                                       disabled={options.children <= 0}
                                       className="optionCounterBtn pointer"
                                       onClick={() =>
                                          handleOption("children", "d")
                                       }
                                    >
                                       -
                                    </button>
                                    <span className="optionCounterNumber">
                                       {options.children}
                                    </span>

                                    <button
                                       className="optionCounterBtn pointer"
                                       onClick={() =>
                                          handleOption("children", "i")
                                       }
                                    >
                                       +
                                    </button>
                                 </div>
                              </div>
                              <div className="optionItem flex">
                                 <span className="optionText">Room</span>
                                 <div className="optionCounter flex">
                                    <button
                                       disabled={options.room <= 1}
                                       className="optionCounterBtn pointer"
                                       onClick={() => handleOption("room", "d")}
                                    >
                                       -
                                    </button>
                                    <span className="optionCounterNumber">
                                       {options.room}
                                    </span>
                                    <button
                                       className="optionCounterBtn pointer"
                                       onClick={() => handleOption("room", "i")}
                                    >
                                       +
                                    </button>
                                 </div>
                              </div>
                           </div>
                        )}
                     </div>
                     <div className="headerSearchItem">
                        <button
                           className="headerSearchBtn pointer"
                           onClick={handleSearch}
                        >
                           Search
                        </button>
                     </div>
                  </div>
               </>
            )}
         </div>
      </div>
   );
}

export default Header;
