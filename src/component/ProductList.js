import React from 'react'
import { useFilterContext } from '../context/FilterContect';
import GridView from './GridView';
import ListView from './ListView';


const ProductList = () => {
  const {filter_product , list_view }= useFilterContext();

  // if(list_view === true){
  //   return <ListView allProducts={filter_product}/>
  // }
  // if( list_view === false){
  //   return <GridView  allProducts={filter_product}/>
  //  }
  
  return (<>
    
    <div>
    {list_view === true ? <ListView allProducts={filter_product}/>: <GridView  allProducts={filter_product}/>}
    </div>
  </>
    
  )
}

export default ProductList;