import Feature from "../../components/Feature";
import FeatureProps from "../../components/FeatureProps";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MailList from "../../components/MailList";
import Navbar from "../../components/Navbar";
import PropertyList from "../../components/PropertyList";
import "./Home.css";

function Home() {
   return (
      <div>
         <Navbar />
         <Header />
         <div className="homeContainer">
            <Feature />
            <h1 className="homeTitle">Browse by property type</h1>
            <PropertyList />
            <h1 className="homeTitle">
               <span>Top 4</span> stunning places that you'll love!
            </h1>
            <FeatureProps />
            <MailList />
            <Footer />
         </div>
      </div>
   );
}

export default Home;
