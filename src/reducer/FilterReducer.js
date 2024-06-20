

const FilterReducer = (state , action) => {

    switch(action.type){

        case 'SET_FILTER_LOADING':
            return{
                ...state,
                filter_loading:true,
            }

        case 'LOAD_FILTER_PRODUCTS':
   const arrayPrice = action.payload.map((curElem)=>curElem.price);
   //console.log(arrayPrice);


   //one way to find max and min number from array 
   //let maxprice=Math.max.apply(null, arrayPrice);
 
   //one way to find max and min number from array
     let maxprice= Math.max( ...arrayPrice );
     let minprice= Math.min( ...arrayPrice );

       // console.log(maxprice);
            return{
                ...state,
                filter_product:[...action.payload],
                all_product:[...action.payload],
                allData:[...action.payload],
                
                filter:{
                 ...state.filter,
                 maxPrice:maxprice,
                 minPrice:minprice,
                price:maxprice,
                 }
            }

            case 'LOAD_LIST_VIEW':
                return{
                    ...state,
                    list_view:true,
                }

           case 'LOAD_GRID_VIEW':
            return{
                ...state,
                list_view:false,
                
            }

            case 'LET_GET_VALUE':
               // let userSortValue = document.getElementById("sort");
              // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
                return{
                    ...state,
                    sort_value:action.payload,
                }

            case 'LET_SORT_VALUE':
                
                     const {filter_product ,sort_value}=state;
                     let allProductData = [...filter_product];

                     const newSortingData = (a,b) =>{
                        if(sort_value === 'lowest'){
                            return a.price - b.price ;
                        }

                        if(sort_value === 'highest'){
                            return b.price - a.price ;
                        }

                        if(sort_value === 'a-z'){
                            return a.name.localeCompare(b.name); 
                        }

                        if(sort_value === 'z-a'){
                            return b.name.localeCompare(a.name); 
                        }
                    }
                let getSortData = allProductData.sort(newSortingData);
                    
                return{
                    ...state,
                    filter_product:getSortData,
                }

                case 'SET_SEARCH_VALUE':
                   const {name , value}= action.payload;
                    return{
                        ...state,
                       filter:{
                        ...state.filter,
                        [name]:value,
                       }
                    }

                case 'SET_FILTER_TEXT':
                   const {text,category,company,color,price}=state.filter;
                   const {all_product}=state;
                   let updateNewData =[...all_product];

                   if(text){
                    updateNewData = updateNewData.filter((curElem)=>{
                        return curElem.name.includes(text);
                    })
                   }

                   if(category !== 'All'){
                     updateNewData = updateNewData.filter((curElem)=>{
                        return curElem.category === category;
                   }) 
                    
                   }

                   if(company !== 'All'){
                    updateNewData = updateNewData.filter((curElem)=>{
                        return curElem.company === company;
                   }) 
                   }
                   
                   if(color !== 'All'){
                    updateNewData = updateNewData.filter((curElem)=>{
                        return curElem.colors.includes(color);
                    })
                   }
                   
                   
                   if(price){
                    updateNewData = updateNewData.filter((curElem)=>{
                     return curElem.price <= price;
                    })
                   }
                
                   return{
                    ...state,
                    filter_product:updateNewData,
                   }   

                   case 'SET_CLEAR_FILTER':
                  const {maxPrice}=state.filter;
                  const {allData}=state;
                  const allDataProduct = [...allData];
                    return{
                        ...state,
                        
                        filter_product:allDataProduct,
                         filter:{
                             ...state.filter,
                             text:'',
                             category:'All',
                             company:'All',
                             color:'All',
                             maxPrice:0,
                             minPrice:maxPrice,
                             price:maxPrice,
                           },

                       
                    }

        default:
            return state;
    }
  
}

export default FilterReducer;