import "./Hotel.css";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MailList from "../../components/MailList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faLocationDot,
   faChevronLeft,
   faChevronRight,
   faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Hotel() {
   const [slideIndex, setSlideIndex] = useState(0);
   const [openSlider, setOpenSlider] = useState(false);
   const photos = [
      {
         src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/106378470.jpg?k=61485256f7ffb11d4d3e28f0e2f7d09d8ccb102271d1651d3656ba919c850cda&o=&hp=1",
      },
      {
         src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/106378467.jpg?k=c74aad523b8e2d4d1d244c1faca34275fcc303bc9c569559082ce159d0276b25&o=&hp=1",
      },
      {
         src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/106378443.jpg?k=5427815fb88e4fe3c4cc7ab7d633bc885cbe75efc74e70c88e7c32e8de0f7a3a&o=&hp=1",
      },
      {
         src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/106378437.jpg?k=32dba85b6b5d6800dcc56abdff39a3efbff5c003a33b6019ad4f81a8ca2c72bb&o=&hp=1",
      },
      {
         src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/106378434.jpg?k=e484af0ecbc865230be69733aae1b0c34f686109fff8775e7c273c78d1553a02&o=&hp=1",
      },
      {
         src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/106378419.jpg?k=9ad89c5dc438176d469300a110e97d783520b79791592fdc8b65350b997bcdc4&o=&hp=1",
      },
   ];

   const openModalImg = (index) => {
      setSlideIndex(index);
      setOpenSlider(true);
   };

   const handleSliderBtn = (direction) => {
      let newSliderIndex;
      if (direction === "l") {
         newSliderIndex = slideIndex === 0 ? 5 : slideIndex - 1;
      } else {
         newSliderIndex = slideIndex === 5 ? 0 : slideIndex + 1;
      }
      setSlideIndex(newSliderIndex);
   };

   return (
      <div className="hotelPage">
         <Navbar />
         <Header type="list" />
         <div className="hotelContainer">
            {openSlider && (
               <div className="slider">
                  <FontAwesomeIcon
                     icon={faXmark}
                     className="closeBtn"
                     onClick={() => setOpenSlider(false)}
                  />
                  <FontAwesomeIcon
                     icon={faChevronLeft}
                     className="leftBtn"
                     onClick={() => handleSliderBtn("l")}
                  />
                  <div className="sliderWrapper">
                     <img
                        src={photos[slideIndex].src}
                        alt=""
                        className="sliderImg"
                     />
                  </div>
                  <FontAwesomeIcon
                     icon={faChevronRight}
                     className="rightBtn"
                     onClick={() => handleSliderBtn("r")}
                  />
               </div>
            )}
            <div className="hotelWrapper">
               <h1 className="hotelTitle">Orchid Eilat Hotel</h1>
               <div className="hotelAddress">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span> South beach, Coral(Almog) Beach, Eilat, Israel</span>
               </div>
               <span className="hotelDistance">
                  Excellent location – 500m from center
               </span>
               <p className="hotelPriceHighlight">
                  Book a stay over $114 at this property and get a free airport
                  taxi.
               </p>
            </div>
            <div className="hotelImg">
               {photos.map((item, index) => (
                  <div className="hotelImgWrapper">
                     <img
                        onClick={() => openModalImg(index)}
                        src={item.src}
                        alt=""
                        className="hotelImg"
                     />
                  </div>
               ))}
            </div>
            <div className="hoteldetailsContainer">
               <div className="hotelDetails">
                  <h1 className="titletxt">The zen ambiance.</h1>
                  <p className="desc">
                     Set right on the Almog Beach, the Orchid Hotel & Resort is
                     a Thai-style holiday village on the Red Sea. It offers
                     gourmet cuisine and a spa.The Orchid has an outdoor pool
                     with sun terrace and a separate children's pool. Guests
                     enjoy free use of bicycles, free Wi-Fi, and free
                     international phone calls from the lobby. Most rooms have
                     panoramic sea views and are decorated in Thai style. They
                     are spread throughout the large resort, and a free shuttle
                     service connects the mountainside rooms to the main hotel
                     building. Couples particularly like the location — they
                     rated it 8.2 for a two-person trip.
                  </p>
               </div>
               <div className="hotelPrice">
                  <h1>Perfect for 2-night stay!</h1>
                  <p className="locate">
                     Top location: Highly rated by recent guests(8.1)
                  </p>
                  <p className="price">
                     <span className="priceSymbol">$</span>234 (
                     <span className="nightDetail">2 nights</span>)
                  </p>
                  <button>Reserve or Book Now!</button>
               </div>
            </div>
         </div>
         <MailList />
         <Footer />
      </div>
   );
}

export default Hotel;
