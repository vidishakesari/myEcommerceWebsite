import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/ProductReducer';


const AppContext = createContext();
const API ='https://api.pujakaitem.com/api/products';

const initialState ={
    products:[],
    featureProducts:[],
    isLoading:false,
    isError:false,
    isSingleLoading:false,
    singleproduct:{},
    isSingleError:false,
}


const AppProvider = ({children}) =>{
  const [state,dispatch] = useReducer(reducer, initialState);
    const getProduct = async (url) =>{
       dispatch({type:'SET_LOADING'});
       try{
        const res = await axios.get(url);
        const products = await res.data;
        //console.log(products);
        dispatch({type:'SET_API_DATA' , payload:products })
       }catch(error){
        dispatch({type:'API_ERROR'});
       }
    }   
    
    const getSingleProduct = async (url)=>{
           dispatch({type:'SET_SINGLE_LOADING'})
        try{
            const res = await axios.get(url);
            const singleproduct = await res.data;
            
            dispatch({type:'SET_SINGLE_PRODUCT' , payload:singleproduct})
        }catch(error){
            dispatch({type:'SET_ERROR'});
        }
    }

    useEffect(() => {
        getProduct(API); 
    },[]);

    return <AppContext.Provider value={{...state ,getSingleProduct}}>{children}</AppContext.Provider>
}

const useProductContext = () =>{
    return useContext(AppContext);
}

export {AppProvider , AppContext , useProductContext};