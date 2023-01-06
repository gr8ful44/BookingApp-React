import "./Feature.css";

function Feature() {
   return (
      <div className="feature">
         <div className="featureItem">
            <img
               src="https://oversixtydev.blob.core.windows.net/media/7823233/paris.jpg"
               alt=""
               className="featureImg"
            />
            <div className="featureTitle">
               <h1>Paris</h1>
               <h2>1223 properties</h2>
            </div>
         </div>

         <div className="featureItem">
            <img
               src="https://th.bing.com/th/id/R.8eb020f4c998594ac468629dafee307f?rik=%2bBK0yq1AFHmGUw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-C-b0VbmDd5E%2fTfPNp1NYUzI%2fAAAAAAAAD_c%2f9r30dEfzfXU%2fs1600%2fjapan-wallpapers-2.jpg&ehk=21kPCSsaXifZapo%2fu%2fLq6y4wAOZuBNHrPF1cFlJJqiQ%3d&risl=&pid=ImgRaw&r=0"
               alt=""
               className="featureImg"
            />
            <div className="featureTitle">
               <h1>Japan</h1>
               <h2>533 properties</h2>
            </div>
         </div>
         <div className="featureItem">
            <img
               src="https://th.bing.com/th/id/R.d5c2498bbde04cdf9fad973ddf9ac648?rik=oXRryyKk8brpeA&pid=ImgRaw&r=0"
               alt=""
               className="featureImg"
            />
            <div className="featureTitle">
               <h1>Abu dhabi</h1>
               <h2>216 properties</h2>
            </div>
         </div>
      </div>
   );
}

export default Feature;
