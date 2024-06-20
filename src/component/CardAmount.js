import React from 'react'
import styled from 'styled-components';
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";


const CardAmount = ({amount , increment , decrement}) => {
  return (
    <Wrapper>
        <div className='setbuttons'>
        <button onClick={increment}  className='setbutton'><IoMdAdd/></button>
        <div className='setbutton amountdiv'>{amount}</div>
        <button onClick={decrement}  className='setbutton'><FiMinus/></button>
    </div>

    
    </Wrapper>
    
  )
}
const Wrapper = styled.section`

.setbuttons{
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    margin:1rem 0 0 0 ;
    border:none;
    background-color:#fff;
    font-size:2rem;

    .setbutton{
    margin-right:1rem;
    border:none;
    background-color:#fff;
    font-size:2rem;

    
}
}
.amountdiv{
        margin-top:1rem;
        

    }




`;
export default CardAmount;