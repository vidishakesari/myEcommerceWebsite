import React from 'react'
import styled from 'styled-components';
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from '../context/FilterContect';

const Sort = () => {
  const {filter_product ,list_view ,setListView ,setGridView,sortProduct}=useFilterContext();
  
  return(
    <Wrapper>
      <div className="sorting-list--grid">
       <button
          className={!list_view ? 'active sort-btn' : 'sort-btn'}
          onClick={setGridView}>
          <BsFillGridFill className="icon" />
        </button>

        <button
          className={list_view ? 'active sort-btn' : 'sort-btn'}
          onClick={setListView}>
          <BsList className="icon" />
        </button>
      </div>

      <div>
        <p style={{fontSize:'1.4rem',color:'black'}}>{`Total Product  ${filter_product.length}`}</p>
      </div>

      <div className="">
      <form action=''>
      <select name="sort" id="sort" className='product-data' onClick={sortProduct}>
         <option value="lowest" >Price(lowest)</option>
         <option value="#" disabled></option>
         <option value="highest">Price(highest)</option>
         <option value="#" disabled></option>
         <option value="a-z">Price(a-z)</option>
         <option value="#" disabled></option>
         <option value="z-a">Price(z-a)</option>
      </select>
      </form>
      
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
padding:2rem 0 0 0;
  display: flex;
  justify-content: space-between;
  ${'' /* margin-top: 5rem; */}

 

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }
  .product-data{
    padding:.6rem 1rem;
    
  }
`;
export default Sort;