function Popularcategories()
{
    const parts=[{
        icon:'heart.png'
    },
    {
        icon:'lungs.png'
    },
    {
        icon:'stomach.png'
    },
    {
        icon:'kidney.png'
    },
    {
        icon:'liver.png'
    },
    {
        icon:'brainstorm.png'
    }
    ]
return(
<div style={{textAlign:'center',display:'flex',height:'345px'}}>
    
    <div style={{margin:'50px 0px 40px 160px'}}>
    <h2>Popular Categories</h2>
    <div style={{display:'flex',textAlign:'center',alignItems:'center'}}>
<p  style={{marginbottom:'40px'}}><i class="fa fa-arrow-left"></i></p>
    {parts.map((part)=>
(

<img height="100px" src={require(`./images/parts/${part.icon}`)} alt='' style={{borderRadius:'50%' ,border:'5px solid #F6AB01',padding:'10px',margin:'30px 0px 0px 60px' }}/>

)
)}

<p  style={{margin:'0px 0px 0px 50px'}}><i class="fa fa-arrow-right"></i></p>
</div>
</div>
</div>
)
}
export default Popularcategories;