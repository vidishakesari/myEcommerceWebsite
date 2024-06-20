import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import FormatPrice from '../Helper/FormatPrice';
import CardAmount from './CardAmount';
import {Button} from '../style/Button';
import { useCardContext } from '../context/CardContext';

const CardItem = (curElem) => {
  const {id, name, image, color, price, amount,stock }=curElem;
  const {removeItem,Increment,Decrement, total_amount }=useCardContext();
  
  console.log(amount);
//   const Increment = () =>{
    
//  }

// const Decrement = () => {

//  }
  return (
    <Wrapper >
      <div className='container grid grid-two-column '>
      <NavLink to={`/singleproduct/${id}`}>
        <div>
            <figure>
                <img src={image} alt={name}/>
                
            </figure>
        </div>
        
            
      </NavLink>
        <div>
          
          <h3>{name}</h3>
          <p>Color : <button   className='setBtn'  style={{backgroundColor:color}} ></button></p>
          <p>Price : <FormatPrice price={price}/></p>
          <p style={{color:'brown'}}>{`only ${stock-amount} left in stock`}</p>
          
          <div className='setChildren'>
          <p> Quantity : </p>
          <CardAmount 
              amount={amount} 
              increment={()=>Increment(id)} 
              decrement={()=>Decrement(id)}
              />
          </div>

          <div className='setChildren'>
          <p>Subtotal :<FormatPrice  price = { total_amount}/></p>
          <div className='setPrice'><Button onClick={()=>removeItem(id)}>Remove</Button></div>
          </div>
          
        </div>
      </div>
      
    </Wrapper>
  )
}
const Wrapper = styled.section`
padding:.2rem 0rem;
background-color:#efecec;

h3{
  font-size:3rem;
  font-weight:500;
}
div{
  p{
    font-size:1.3rem;
    margin-top:1rem;
  }
}
.container{
  padding:1rem 0rem;
  background-color:white;
  box-shadow: 2px 1px 2px 1px grey;
}

figure {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    
    }
   
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      
    }
    .grid {
  display: grid;
  gap: 9rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);

}
.setBtn{
  width:1.7rem;
  height:1.7rem;
  border-radius:50%;
  margin-right:1rem;
  opacity: 0.5;
  cursor: pointer;
  border: none;
    outline: none;
}
.setPrice{
  margin-left:5rem;
  
  Button{
    font-size:1.3rem;
    padding:.7rem 1rem;
    border-radius:5px;
  }
}
.setChildren{
  display:flex;
  flex-direction:row;
  
}


    
    @media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
    max-width: 130rem;
    padding: 0 3.2rem;
  }
  }

   @media (max-width: ${({ theme }) => theme.media.mobile}) {
      

    .grid {
  display: grid;
  gap: 9rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);

}

   }

`;
export default CardItem;