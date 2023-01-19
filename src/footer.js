import { getIcon } from "./getIcons";
import headerIcons from './icons/icons'
function Footer() {
    return (
        <div className="footers1">
            <div className="footers">
                <div className="foot1">
                    <p className="foot1para"><b>Know Us</b></p>
                    <ul className="footlists">
                        <li> About Us </li>
                        <li>Contact Us</li>
                        <li> Press Coverage</li>
                        <li>Careers</li>
                        <li>Business Partnership </li>
                        <li>Become a Health Partner</li>
                        <li> Corporate Governance</li>
                    </ul>
                </div>
                <div className="foot2">
                    <p className="foot1para"><b>Our Policies</b></p>
                    <ul className="footlists">
                        <li> Privacy Policy </li>
                        <li> Terms and Conditions</li>
                        <li> Editorial Policy</li>
                        <li>Return Policy </li>
                        <li>IP Policy</li>
                        <li>Grievance Redressal Policy</li>
                        <li>Fake Jobs and Fraud Disclaimer</li>
                    </ul>

                </div>
                <div className="foot3">
                    <p className="foot1para"><b>Our Services</b></p>
                    <ul className="footlists">
                        <li> Order Medicines </li>
                        <li>Ayurveda Articles </li>
                        <li> Articles</li>
                        <li> Care Plan</li>

                    </ul>
                </div>
                <div className="foot4">
                    <p className="foot1para"><b>Qucik Links</b></p>
                    <div className="quickLink">
                        <ul className="footlists">
                            <li> COVID Essentials</li>
                            <li>Diabetes</li>
                            <li>Eyewear</li>
                            <li>Ayush</li>
                            <li>Ayurvedic</li>
                            <li>Homeopathy</li>
                            <li>Fitness</li>

                        </ul>
                        <ul className="footlists">
                            <li> Mom & Baby</li>
                            <li>Devices </li>
                            <li>Surgicals </li>
                            <li>Sexual</li>
                            <li>Wellness</li>
                            <li>Treatments</li>
                            <li> Heart care</li>
                            <li>Lung care</li>

                        </ul>
                        <ul className="footlists">
                       <li>Stomach care</li>
                       <li>Eye care</li>
                       <li>Nose care</li>
                       <li>Ear care</li>
                       <li>Dental care</li>
                       <li>Muscle care</li>
                       <li>Liver care</li>
                      
                        </ul>
                    </div>
                </div>
                <div className="foot5">
                    <p className="foot2para"><b>SUBSCRIBE TO OUR NEWSLETTER</b></p>
                    <p className="foot3para">Get a free subscription to our health and fitness tip <br/>and stay tuned to our latest offers</p>
               <div className="foot4para"><p className="emailadd">Enter your email address</p><div className="whitebg">  <p style={{margin:'5px'}}>{getIcon({ iconList: headerIcons,iconName:'ArrowRight',height:'25px',width:'30px'})}</p></div></div>
            
                </div>
              
            </div>
            <div style={{margin:'0px 50px 0px 50px'}}>
            <hr style={{ borderTop: '2px solid red'}}></hr>
            <div style={{display:'flex'}}>
                <div style={{width:'250px'}}><p >Our Payment Partners</p></div>
                <div style={{width:'600px'}}>
                <img src={require('./images/gpay.png')} style={{margin:'10px'}} height="30px" width="40px"/>
                <img src={require('./images/rupay.png')} style={{margin:'10px'}}  height="30px" width="40px"/>
                <img src={require('./images/mastercard.png')} style={{margin:'10px'}} height="30px" width="40px"/>
                <img src={require('./images/visa.png')} style={{margin:'10px'}} height="30px" width="40px"/>
                <img src={require('./images/amazonpay.png')} style={{margin:'10px'}} height="30px" width="40px"/>
                <img src={require('./images/phonepe.png')} style={{margin:'10px'}} height="30px" width="40px"/>
                <img src={require('./images/paytm.png')} style={{margin:'10px'}} height="30px" width="40px"/>
                </div>
                <p>SOCIAL CONNECT - Facebook | Twitter | LinkedIn | YouTube | Refer & Earn</p>
            </div>
            <hr style={{ borderTop: '2px solid red'}}></hr>
            </div>
            
        </div>
    )
}
export default Footer;