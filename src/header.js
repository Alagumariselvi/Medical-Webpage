
import logo from './images/logo.png';
import { getIcon } from './getIcons';
import headerIcons from './icons/icons';
import FloatHeader from './floatHeader';
function Header()
{
     const[wishlist,setWishList]=useState(0);
const[cart,setCart]=useState("")
useEffect(()=>
{
setWishList(1);
setCart("3");
},[])
return(
    <>
    <div className='header'>
        <div className='logo'>
<img src={logo} />
</div>
<div className='rightPanel'>
<p style={{marginTop: '45px',marginLeft: '550px',fontFamily:'Barlow',fontSize:'22px'}}><b>Need help<i className="fa fa-question-circle-o" style={{paddingLeft:'3px',width: '19px',height: '34px'}} aria-hidden="true"></i></b></p>
<div className='downloadApp'>
<i className="fa fa-mobile" style={{fontSize:'40px',padding:'10px'}} aria-hidden="true"></i>
    <p style={{font:'normal normal bold 18px Barlow Bold',letterSpacing: '0px',color: '#1D1D1D',opacity: 1}}>
Download App</p>
</div>
<div className='center'>
    <div className='overText'>{wishlist}</div>{getIcon({ iconList: headerIcons,iconName: 'Heart',height:'25px',width:'30px'})}</div>

<div className='center'><div className='overText'>{cart}</div>{getIcon({ iconList: headerIcons,iconName: 'Cart',height:'25px',width:'30px'})}</div>
<div className='center'>{getIcon({ iconList: headerIcons,iconName: 'User',height:'25px',width:'30px'})}</div>
</div>

    </div>
    <FloatHeader/>
    </>
)
}
export default Header;
