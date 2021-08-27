import {ADD_TO_CART,REMOVE_TO_CART} from "../../constant"
// const inatialstate ={
  //   cartdata:[]
 //}
 
 export  const CardItem=(state=[],action)=> {
     switch(action.type){
         
 case ADD_TO_CART:
    //console.log("reducer",action);
 return [
    ...state,
    {cartdata:action.data}
 ]
 case REMOVE_TO_CART:
    state.pop()
 return [
     ...state,
 
 ]

 default : return state
   


     }
 }
 