import React from "react";

export default function Header(props) {
    //console.log("home",props.data)
    return (
           
           <div className="main">
           <div className="cartData">{props.data.length}</div> 
           <i className="fa fa-shopping-cart cartIcon" aria-hidden="true"></i>
           </div>
               
    )
}