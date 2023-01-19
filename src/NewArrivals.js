import { getIcon } from "./getIcons";
import headerIcons from './icons/icons'
function NewArrivals()
{
    const parts=[{
        icon:'tonic.webp',
        description:'Somersung Sonic X2000',
        price:'₹46.00'
    },
    {
        icon:'download.jfif',
        description:'3-layer mask with an elastic band (1 piece)',
        price:'₹66.00'
    },
    {
        icon:'tonic.webp',
        description:'Somersung Sonic X2000',
        price:'₹56.00'
    },
    {
        icon:'download.jfif',
        description:'3-layer mask with an elastic band (1 piece)',
        price:'₹86.00'
    },
    
    ]
return(
<div style={{textAlign:'center',display:'flex',height:'700px',backgroundColor:'#F1F1F1'}}>
    
    <div style={{margin:'50px 0px 40px 50px'}}>
    <h2>New Arrivals</h2>
    <div style={{display:'flex',textAlign:'center',alignItems:'center'}}>
<p  style={{marginbottom:'40px'}}><i class="fa fa-arrow-left"></i></p>
    {parts.map((part)=>
(
   <div  style={{height:'480px'}}>
<div style={{backgroundColor:'white',padding:'10px 10px 40px 10px',margin:'10px'}}>
<div className='center1' style={{float:'right'}}>
<i className="fa fa-heart-o" style={{color:'red'}}></i>
    </div>
<img height="220px" width="220px" src={require(`./images/arrivals/${part.icon}`)} alt='' style={{padding:'10px',margin:'30px 0px 0px 60px' }}/>
<p>{part.description}</p>
<p>{part.price}</p>
</div>

<button className="cartButton">Add to Cart</button>
</div>


)
)}

<p  style={{margin:'0px 0px 0px 50px'}}><i class="fa fa-arrow-right"></i></p>
</div>
</div>
</div>
)
}
export default NewArrivals;