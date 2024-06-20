import { createContext ,useContext, useReducer ,useEffect} from "react";
import reducer from '../reducer/CardReducer';

const CardContext = createContext();

const getCardData = () =>{
    let CardData = localStorage.getItem('items');
    // if(CardData == []){
    //     return[];
    // }
    // else{
    //     return JSON.parse(CardData);
    // }
    const parsedData = JSON.parse(CardData);
    if(!Array.isArray(parsedData)) return[];
     return parsedData;
}

const initialState={
    //Card:[],
   Card:getCardData(),
   total_item:'',
   total_amount:'',
   shipp_charges:10000,
   shipping:5000,
   nunamount:0,
   paybill:0,
}

const CardContextProvider = ({children}) =>{
 const [state , dispatch]=useReducer(reducer , initialState);

 const CardItem = (id,color,amount,product) =>{
  return  dispatch({type:'GET_CARD_ITEM' , payload:{id,color,amount,product}})
 }
 const removeItem = (id)=>{
    return dispatch({type:'LET_CLEAR_ITEM' , payload:id});
 }

 const cleanitem = () => {
    return dispatch({type:'LET_REMOVE_ITEM'});
 }

 const Increment = (id) =>{
return dispatch({type:'LET_INCREASE_VALUE',payload:id});
 }

 const Decrement = (id) =>{
    return dispatch({type:'LET_DECRASES_VALUE',payload:id});
 }



 useEffect(() => {
   dispatch({type:'LET_ADD_TOTAL_ITEM'});
   dispatch({type:'LET_ADD_TOTAL_AMOUNT'});
   dispatch({type:'SHIPP_CHARGES'});
    localStorage.setItem('items', JSON.stringify(state.Card));
  }, [state.Card]);

  

    return (
        <CardContext.Provider  value={{...state,CardItem,removeItem,cleanitem,Increment,Decrement }}>{children}</CardContext.Provider>
    )
}
const useCardContext = () => {
    return useContext(CardContext);
}

export {CardContextProvider,CardContext,useCardContext};