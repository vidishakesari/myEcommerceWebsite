import React from 'react'
import { FaStar , FaStarHalfAlt} from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

const Star = ({star , review}) => {

    const StarReview = Array.from({length:5},(ele,index)=>{
            const number = index + 1;
        const halfNumber = index + 0.5;
        
        //console.log(number);
        //console.log(halfNumber);


        return(<>
            <span key = {index}>

{
                star >= number ? <FaStar style={{color:'#ffc40c'}}/> : star >=  halfNumber ? <FaStarHalfAlt  style={{color:'#ffc40c'}}/> : <FaRegStar  style={{color:'#ffc40c'}}/>
            }
            </span>
            
            </>
        )
    })
  
  return (<>
       
     <div>{StarReview }</div>
     <p>{`${review} Customer reviews`}</p>
  </>
    
    
  )
}

export default Star;