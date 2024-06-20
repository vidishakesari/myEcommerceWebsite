import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/FilterContect';
import { TiTickOutline } from "react-icons/ti";
import FormatPrice from '../Helper/FormatPrice';
import {Button} from '../style/Button';

const FilterSection = () => {
  const {updateValue, all_product,ClearFilter,  filter:{text,color,maxPrice,minPrice,price}}=useFilterContext();
     // console.log(maxPrice);


  //const data =[...all_product];
     //console.log(data);
    // const newvalue = data.map((cur)=>{
    //   return(cur.category) ;
    // })
    // let unique = [...new Set(newvalue)];
    // console.log(unique);


      
     const uniqueFunction =(data , property) =>{
          let newvalue = data.map((cueElem)=>{
            return cueElem[property];
          });
          //console.log(newvalue);  
          if(property === 'colors'){
            newvalue = newvalue.flat();
          }
        //console.log(newvalue);
        let unique = ['All',...new Set(newvalue)];
        return (unique);
          
     }
     


     const newCategoryData = uniqueFunction(all_product ,'category' );
     const newCompanyData = uniqueFunction(all_product ,'company');
     const newColorsData = uniqueFunction(all_product ,'colors');
      //console.log(newColorsData);

     
  return (
    <Wrapper className='section'>
    <div className='filter-search'>
    <form onSubmit={(e) =>e.preventDefault() }>
       <input type='text' placeholder='search' name='text' value={text} onChange={updateValue}/>
</form>
    </div>
  
  <div className='categoryset'>
  <h3>Category</h3>
  <div >
  { newCategoryData.map((curElem , id)=>{
    return( 
    <button key={id} 
    type='button'
    className='buttons'
    name='category' 
    value={curElem} 
    onClick={updateValue}>
    {curElem}
    </button>
    )
  })

  }

 </div>
  </div>
 
 <h3>Company</h3>
   <form>
      <select className='filter-company--select'
      name='company'
      id='company'
      onClick={updateValue}>
      {newCompanyData.map((curElem,id)=>{
       return (
        <option key={id} name='company' value={curElem} >{curElem}</option>
       )
      })}
      </select>
   </form>

   <div>
    <h3>Colors :</h3>
       {newColorsData.map((curElem,index)=>{
        return(
          <button
                key={index}
                type="button"
                value={curElem}
                name="color"
                style={{ backgroundColor:curElem}}
                className="btnStyle"
                onClick={updateValue}>
                 { curElem === color ? <TiTickOutline  className='checkStyle'/> : null } 
              </button>
   
        )
       })}
   </div>

   <div  className='filter_price'>
    <h3>Price</h3>
    <p><FormatPrice price={price}/>₹</p>
    <input type="range" id="price" name="price" value={price} min={minPrice}  max={maxPrice} onChange={updateValue}/>
   </div>
 

  <div>
    <Button  onClick={ClearFilter}>Clear Filter</Button>
  </div>
      
    </Wrapper>
  )
}
const Wrapper =styled.section`

  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;



  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .categoryset {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0rem;

      .buttons {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  
  .color-all--style {
    
    width:2rem;
    height:2rem;
   border-radius:100%;
    border: none;
    cursor: pointer;
   ${'' /* margin-right:1rem; */}

  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    ${'' /* background-color: #000; */}
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    position:relative;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1.8rem;
    
    color: #fff;
    ${'' /* margin-top:rem; */}
    position:absolute;
    top:.2rem;
    right:.2rem;
    ${'' /* bottom:1rem; */}
  }

  .filter_price {
    input {
      margin:0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  
  Button{
    padding:1rem;
    color:#000;
  }
  
`;
export default FilterSection;