import "./FeatureProps.css";

function FeatureProps() {
   return (
      <div className="featureProps">
         <div className="fpItem">
            <img
               src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
               alt=""
               className="fpImg"
            />
            <span className="fpName">
               Hotel Alva Park Costa Brava, Platja de Fenals
            </span>
            <span className="fpCity">Spian</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
               <button>8.9</button>
               <span>Excellent</span>
            </div>
         </div>
         <div className="fpItem">
            <img
               src="https://images.unsplash.com/photo-1498503403619-e39e4ff390fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
               alt=""
               className="fpImg"
            />
            <span className="fpName">Remezzo Villas</span>
            <span className="fpCity">Greece</span>
            <span className="fpPrice">Starting from $140</span>
            <div className="fpRating">
               <button>9.3</button>
               <span>Exceptional</span>
            </div>
         </div>
         <div className="fpItem">
            <img
               src="https://s3-eu-west-1.amazonaws.com/micebook/media/2614/fourseasons-lisbon-cover.jpg"
               alt=""
               className="fpImg"
            />
            <span className="fpName">Four Seasons Hotel</span>
            <span className="fpCity">Lisbon</span>
            <span className="fpPrice">Starting from $99</span>
            <div className="fpRating">
               <button>8.8</button>
               <span>Excellent</span>
            </div>
         </div>
         <div className="fpItem">
            <img
               src="https://th.bing.com/th/id/R.3e0d3e7ba69cea58f4581f2202ada79e?rik=hN2TKxaDaSInUg&riu=http%3a%2f%2fwww.telegraph.co.uk%2fcontent%2fdam%2fTravel%2fhotels%2feurope%2ffrance%2fparis%2fshangri-la-paris-p.jpg&ehk=i3UDO1XvEtBpGabRamWw8dIppOlFJMRRWxKVRoJX2pU%3d&risl=&pid=ImgRaw&r=0"
               alt=""
               className="fpImg"
            />
            <span className="fpName">Shangri-La Hotel</span>
            <span className="fpCity">Paris</span>
            <span className="fpPrice">Starting from $855</span>
            <div className="fpRating">
               <button>8.9</button>
               <span>Excellent</span>
            </div>
         </div>
      </div>
   );
}

export default FeatureProps;
