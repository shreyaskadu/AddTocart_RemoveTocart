import {ADD_TO_CART,REMOVE_TO_CART} from '../../constant'


export  const addtocart=(data)=> {
   //console.log("action",data)
   return{

      data :data,
      type : ADD_TO_CART
       
   }
     
 
   
}
export  const removetocart=()=> {
   return{

      type : REMOVE_TO_CART
       
   }
     
 
   
}
