import { getIcon } from "./getIcons";
import headerIcons from './icons/icons'
function Banner()
{
return(
    <section className="hero-banner">
 
          <div className="bannerText">
            <h1 className="bannerHeading">What Are You Looking For?</h1>
            <p className="lead">The pharmacy that really delivers</p>
            <div className="search" style={{display:'flex'}}>
              <span>{getIcon({ iconList: headerIcons,iconName:'Location',height:'10px',width:'10px'})}</span>
<span className="searchn">Chennai{getIcon({ iconList: headerIcons,iconName:'Arrow',height:'20px',width:'20px'})}</span><span style={{marginTop:'10px'}}>|</span>
<span className="searchproducts">Search for Medicines and Health Products</span>
<span style={{marginTop:'10px'}}>{getIcon({ iconList: headerIcons,iconName:'Search',height:'20px',width:'20px'})}</span>
            </div>
         <div className="descriptt" style={{display:'flex'}}>
        <p className="orddes">ORDER WITH PRESCRIPTION</p>
        <button className="desbtn "><b><i class="fa fa-file-text-o" aria-hidden="true" style={{color:'#EE3124'}}></i> UPLOAD NOW</b></button>
   </div>
   <div className="iconns">
   <div className='medicine medicinebg'>
{getIcon({ iconList: headerIcons,iconName:'MedicineIcon',height:'20px',width:'20px'})}
</div>
<div style={{marginTop:'20px'}}>
<span className="iconhead1" style={{marginLeft:'-75px'}}><b>Medicine</b></span><br></br>
<span className="iconpara1">Over 25000 products</span>

</div>
  <div className="medicine medicinebg1">
  {getIcon({ iconList: headerIcons,iconName:'MedicineIcon2',height:'25px',width:'30px'})}
      </div>
      <div style={{marginTop:'20px'}}>
<span className="iconhead1" style={{marginLeft:'-58px'}}><b>Wellness</b></span><br></br>
<span className="iconpara1">Health products</span>

</div>
      <div className="medicine medicinebg2">
  {getIcon({ iconList: headerIcons,iconName:'MedicineIcon3',height:'25px',width:'30px'})}
      </div>
      <div style={{marginTop:'20px'}}>
<span className="iconhead1" style={{marginLeft:'-115px'}}><b>Health Blog</b></span><br></br>
<span className="iconpara1">Trending from health experts</span>

</div>
      <div className="medicine medicinebg3">
  {getIcon({ iconList: headerIcons,iconName:'MedicineIcon4',height:'25px',width:'30px'})}
      </div>
      <div style={{marginTop:'20px'}}>
<span className="iconhead1" style={{marginLeft:'-105px'}}><b>Plan</b></span><br></br>
<span className="iconpara1">membership plan</span>

</div>
      </div>
      </div>
     
  </section>
)
}
export default Banner;