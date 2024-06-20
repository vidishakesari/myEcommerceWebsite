import React from 'react'
import {useProductContext} from '../context/ProductContext'
import styled from 'styled-components';
import Products from './Products';
import { MdOutlineDownloading } from "react-icons/md";

const FeatureProduct = () => {
    const {featureProducts,isLoading} = useProductContext();
    // console.log(featureProducts);
    if(isLoading){
        return<div><MdOutlineDownloading style={{width:'4rem', height:'4rem'}}/></div>
    }
  return (
    <Wrapper className='section'>
      <div className='container'>
        <div className='intro-data data'>Check Now!</div>
        <div className="common-heading data">Our Feature Services</div>
        <div className="grid grid-three-column" >
            {featureProducts.map((curElem)=>{
                
                return<Products key={curElem.id} {...curElem}/>
            })}
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
padding: 3rem 7rem;
  background-color: ${({ theme }) => theme.colors.bg};
  text-align:center;


`;
export default FeatureProduct;