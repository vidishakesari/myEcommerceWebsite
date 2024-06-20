import React, { useState } from 'react'
import styled from 'styled-components';

const ProductImage = ({imgs=[{url:''}]}) => {

  const [imageData , setimageData] = useState(imgs[0]);
  //console.log(imgs);
  return (
    <Wrapper>
     <div className='container'>
     <div className='set_div'>
           <img src={imageData.url} alt={imageData.filename} className='set_Image'/>
         </div>
         
      <div className='grid grid_four_row'>
         
        {
          imgs.map((curElem , index)=>{
            return( 
            <figure >
              <img src={curElem.url} 
              alt={curElem.filename} 
              key={index} 
              onClick={() => setimageData(curElem)}
              />
            </figure>
            )
          })
        }
      </div>
     </div>

    </Wrapper>
  )
}
const Wrapper = styled.section`

  .grid {
    display:flex;
    gap: 1rem;
   

    .grid_four_row{
   flex-direction: row;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(4 , 1fr);
    grid-template-rows:1fr;
    ${'' /* width: 100%; */}
    
    } 

    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
      
  }
  }
  
 .set_div{
  display:flex;
  justify-content:center;
  ${'' /* background-color:blue; */}
  margin-bottom:2rem;
  

  
  .set_Image{
    width:50%;
   
    align-item:center;
  }
 }
 
`;
export default ProductImage;