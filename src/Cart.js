import React from 'react'
import styled from 'styled-components';
import Footer from './component/Footer';
import { useCardContext } from './context/CardContext';
import CardItem from './component/CardItem';
import {Button} from './style/Button';
import { NavLink } from 'react-router-dom';
import FormatPrice from './Helper/FormatPrice';

const Cart = () => {
const {Card ,cleanitem , total_amount ,paybill ,shipping ,shipp_charges}=useCardContext();
//console.log(Card);

  return (
     <Wrapper>
     <div className='container'>
      <h2>Your Shopping Basket</h2>
      <div className='grid grid-two-column'>
      <p>Buy Your Item</p>
      
      </div>
      
     </div>
     
     <hr/>
     <div>
       {Card.map((curElem)=>{
         
          return(<CardItem key={curElem.id} {...curElem}/>)
           
           })
       }
     </div> 
     <div className='container shoppingCard'>
     <NavLink to='/product'>
     <Button>Shopping Continue</Button>
     </NavLink>

     <div className='container'>
        <div>
          <p className='amountTotal'>Total Amount : <FormatPrice price = {total_amount}/></p>
         
          <p className='amountTotal'>Shipping Charges : <FormatPrice price={ total_amount === 0 ? 0 : total_amount <= 5000 ? shipping : shipp_charges}/></p>
          <hr/>
          <p className='amountTotal'>Amount to pay : <FormatPrice price = {total_amount}/></p>
        </div>
     </div>
     
     <NavLink>
     <Button style={{backgroundColor:'red'}} onClick={cleanitem}>Clear Card</Button>
     </NavLink>
     

     </div>


     
      <Footer/>
    </Wrapper>
  )
}
const Wrapper = styled.section`
div{
  h2{
    font-size:3rem;
    font-weight:600;
  }
}
hr{
  margin-top:1rem;
}
.cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }
  
  
  
  .shoppingCard{
    display:flex;
    justify-content:space-between;
    margin-top:1rem;
  }

  .amountTotal{
    font-size:1.4rem;
  }
`;

export default Cart;