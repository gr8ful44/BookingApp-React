import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import "./List.css";
import SearchItem from "../../components/SearchItem";

function List() {
   const location = useLocation();
   const [destination, setDestination] = useState(location.state.destination);
   const [date, setDate] = useState(location.state.date);
   const [openDate, setOpenDate] = useState(false);
   const [options, setOptions] = useState(location.state.options);

   return (
      <>
         <Navbar />
         <Header type="list" />
         <div className="listContainer">
            <div className="listWrapper">
               <div className="listSearch">
                  <div className="title">Search</div>
                  <div className="listItem">
                     <h4>Destination</h4>
                     <input type="text" placeholder={destination} />
                  </div>
                  <div className="listItem">
                     <h4>Check-in Date</h4>
                     <span
                        onClick={() => {
                           setOpenDate(!openDate);
                        }}
                     >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                        date[0].endDate,
                        "dd/MM/yyyy"
                     )}`}</span>
                     {openDate && (
                        <DateRange
                           onChange={(item) => setDate([item.selection])}
                           minDate={new Date()}
                           ranges={date}
                        />
                     )}
                  </div>
                  <div className="listItem">
                     <h4>Options</h4>
                     <div className="listOptionsItem">
                        <span className="listOptionsText">
                           Min price <small>(per night)</small>
                        </span>
                        <input type="number" className="listOptionsInput" />
                     </div>
                     <div className="listOptionsItem">
                        <span className="listOptionsText">
                           Max price <small>(per night)</small>
                        </span>
                        <input type="number" className="listOptionsInput" />
                     </div>
                     <div className="listOptionsItem">
                        <span className="listOptionsText">Adult</span>
                        <input
                           type="number"
                           min={1}
                           className="listOptionsInput"
                           placeholder={options.adult}
                        />
                     </div>
                     <div className="listOptionsItem">
                        <span className="listOptionsText">Children</span>
                        <input
                           type="number"
                           min={0}
                           className="listOptionsInput"
                           placeholder={options.children}
                        />
                     </div>
                     <div className="listOptionsItem">
                        <span className="listOptionsText">Room</span>
                        <input
                           type="number"
                           min={1}
                           className="listOptionsInput"
                           placeholder={options.room}
                        />
                     </div>
                  </div>
                  <button>Search</button>
               </div>
               <h1 className="listResult">
                  <SearchItem />
                  <SearchItem />
                  <SearchItem />
                  <SearchItem />
                  <SearchItem />
                  <SearchItem />
               </h1>
            </div>
         </div>
      </>
   );
}

export default List;
