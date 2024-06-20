import React, { useState } from 'react'
import styled from 'styled-components';
import { TiTick } from "react-icons/ti";
import CardAmount from './CardAmount';
import { NavLink } from 'react-router-dom';
import {Button} from '../style/Button';
import { useCardContext } from '../context/CardContext';


const AddToCard = ({product}) => {
  const {CardItem}=useCardContext();

  const [color , setcolor] = useState();
  const [amount , setamount] = useState(0);
    const { id , colors , stock}=product;

    const Increment = () =>{
        if(amount < stock ){
          return setamount(amount + 1);
        }
        else{
          setamount(stock);
        }
    }

    const Decrement = () => {
      if(amount > 0){
         return setamount(amount - 1)
      }

      else{
        return setamount(amount);
      }
    }
    //console.log(colors);
  return (
    <Wrapper>
     <div>
      <p>Colors :&nbsp;
      <span>
      {colors.map((curelem , index)=>{
        return(
          
          <button  key={index} className='setBtn'  style={{backgroundColor:curelem}} onClick={() => setcolor(curelem)}>

          {color === curelem ? <TiTick className='tickset'/> : null}
          </button>
          )
         })}
      </span>
      </p>
    </div>

<CardAmount 
amount={amount} 
increment={Increment} 
decrement={Decrement}/>

<NavLink to='/Cart' onClick={()=>CardItem(id,color,amount,product)}>
        <Button >Add Item</Button>
</NavLink>

    </Wrapper>
  )
}
const Wrapper  = styled.section`
.setBtn{
  width:1.7rem;
  height:1.7rem;
  border-radius:50%;
  margin-right:1rem;
  opacity: 0.5;
  cursor: pointer;
  border: none;
    outline: none;

  &:hover {
      opacity:1;
}
}
.tickset{
  color:white;
  
}
Button{
    padding:1rem;
    font-size:1.2rem;
}

`;
export default AddToCard;