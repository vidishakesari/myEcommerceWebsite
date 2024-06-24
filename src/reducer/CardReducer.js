const CardReducer = (state , action) => {
    switch(action.type){

       case 'GET_CARD_ITEM':
        const {id,color,amount,product}= action.payload;
         
       let existingItem = state.Card.find((curElem)=>{
        return curElem.id === color+id

       })
       //console.log(existingItem);
          if(existingItem) {
           let upDatedItems = state.Card.map((curElem)=>{
                if(curElem.id === color + id){
                    let updatedamount = curElem.amount + amount 
                    if(updatedamount >= curElem.stock){
                        updatedamount = curElem.stock
                    }
                    return{
                        ...curElem,
                        amount:updatedamount,
                    }
                    
                }else{
                    return curElem
                }
           });
           return{
               ...state,
               Card:upDatedItems,
           }
           
          }  
           else{
       // console.log(existingItem);
        
        let addCardItem={
           id:color+id,
           color:color,
           amount:amount,
           name:product.name,
           price:product.price,
           image:product.image[0].url,
           stock:product.stock,
        }
        return{
            ...state,
            Card:[...state.Card,addCardItem],
        }
     }
        case 'LET_CLEAR_ITEM':
           
            const updatedClearItem =state.Card.filter((curElem)=>{
               return curElem.id !== action.payload;
            })
            return{
               ...state,
               Card:updatedClearItem,
            }

            case 'LET_REMOVE_ITEM':
                return{
                    ...state,
                    Card:[],
                }

            case 'LET_INCREASE_VALUE':
                let upDatedToggel = state.Card.map((curElem)=>{
                    if(curElem.id === action.payload){
                        let updatedincrement = curElem.amount + 1 
                        console.log(updatedincrement);

                        if(updatedincrement >= curElem.stock){
                            updatedincrement = curElem.stock
                        }
                        return{
                            ...curElem,
                            amount:updatedincrement,
                        }
                        
                    }else{
                        return curElem
                    }
               });
               return{
                  ...state,
                  Card:upDatedToggel,
               }

               case 'LET_DECRASES_VALUE':
                 let updatedecrement = state.Card.map((curElem)=>{
                    if(curElem.id === action.payload){
                        //console.log(curElem);
                        let updatedecre = curElem.amount - 1
                        if(updatedecre <= 0){
                            updatedecre = 0;
                        }
                        return{
                            ...curElem,
                            amount : updatedecre,
                        }
                    }
                    else{
                        return curElem;
                    }
                        
                 })
                 return{
                    ...state,
                    Card:updatedecrement,
                 }

                 case 'LET_ADD_TOTAL_ITEM':
                    let totalItem;
                    totalItem = state.Card.reduce((initialValue, curElem) => {
                        let {amount}=curElem;

                        initialValue=initialValue + amount;
                       return initialValue;
                    },0);
                       
    
                    return{
                        ...state,
                       total_item:totalItem,

                    }

                    case 'LET_ADD_TOTAL_AMOUNT':
                        let totalAmount = state.Card.reduce((initialValue, curElem) =>{
                            let {price , amount}=curElem;
                            initialValue = initialValue + (price * amount);
                            return initialValue;
                        },0);
                        return{
                            ...state,
                            total_amount:totalAmount,
                        }

                        // case 'SHIPP_CHARGES':
                        //   const {total_amount,shipp_charges ,shipping }=state;
                        //   if(total_amount >= 5000){
                        //     let total = total_amount + shipping;

                        //     if(total_amount === 0){
                        //         total = total_amount + 0;
                        //     }

                        //     return{
                        //         ...state,
                        //         paybill:total,
                        //     }
                        //   }else if(total_amount < 5000){
                        //     let total = total_amount + shipp_charges;
                        //     return{
                        //         ...state,
                        //         paybill:total,
                        //     }
                        //   }
                              
                       
                      
        default:
            return state;

    }

}

export default CardReducer; 