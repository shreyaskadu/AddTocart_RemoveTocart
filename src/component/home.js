import React from "react";
import img from "../component/img1.jpg"

export default function Home(props) {
    console.log("home",props)
    return (
        <>
         <div className="parent1">
         <div style={{width: "566px"}}>
            <div className="cart">
                <div><img src={img}alt="img" ></img></div>
                <div className="data"><p>I phone 11</p><span>price</span>:<span>10000</span></div>
                <div className="btnparent">
                    <button className="btn1" onClick={()=>props.addtocartHandler({price:10000})}>ADD TO CART</button>
                    <button className="btn2"onClick={()=>props.removetocartHandler()}>REMOVE TO CART</button>
                </div>
                
                
            </div>
        </div>
        <div style={{width: "566px"}}>
            <div className="cart">
                <div><img src={img} alt="img" ></img></div>
                <div className="data"><p>I phone 11</p><span>price</span>:<span>10000</span></div>
                <div className="btnparent">
                    <button className="btn1" onClick={()=>props.addtocartHandler({price:10000})}>ADD TO CART</button>
                    <button className="btn2"onClick={()=>props.removetocartHandler()}>REMOVE TO CART</button>
                </div>
                
                
            </div>
        </div>
       
         </div>
         <div className="parent1">
         <div style={{width: "566px"}}>
            <div className="cart">
                <div><img src={img} alt="img" ></img></div>
                <div className="data"><p>I phone 11</p><span>price</span>:<span>10000</span></div>
                <div className="btnparent">
                    <button className="btn1" onClick={()=>props.addtocartHandler({price:10000})}>ADD TO CART</button>
                    <button className="btn2"onClick={()=>props.removetocartHandler()}>REMOVE TO CART</button>
                </div>
                
                
            </div>
        </div>
       
        <div style={{width: "566px"}}>
            <div className="cart">
                <div><img src={img} alt="img"></img></div>
                <div className="data"><p>I phone 11</p><span>price</span>:<span>10000</span></div>
                <div className="btnparent">
                    <button className="btn1" onClick={()=>props.addtocartHandler({price:10000})}>ADD TO CART</button>
                    <button className="btn2"onClick={()=>props.removetocartHandler()}>REMOVE TO CART</button>
                </div>
                
                
            </div>
        </div>
       
         </div>
         <div className="parent1">
         <div style={{width: "566px"}}>
            <div className="cart">
                <div><img src={img} alt="img"></img></div>
                <div className="data"><p>I phone 11</p><span>price</span>:<span>10000</span></div>
                <div className="btnparent">
                    <button className="btn1" onClick={()=>props.addtocartHandler({price:10000})}>ADD TO CART</button>
                    <button className="btn2"onClick={()=>props.removetocartHandler()}>REMOVE TO CART</button>
                </div>
                
                
            </div>
        </div>
        <div style={{width: "566px"}}>
            <div className="cart">
                <div><img src={img} alt="img"></img></div>
                <div className="data"><p>I phone 11</p><span>price</span>:<span>10000</span></div>
                <div className="btnparent">
                    <button className="btn1" onClick={()=>props.addtocartHandler({price:10000})}>ADD TO CART</button>
                    <button className="btn2"onClick={()=>props.removetocartHandler()}>REMOVE TO CART</button>
                </div>
                
                
            </div>
        </div>
       
         </div>
         <div className="parent1">
         <div style={{width: "566px"}}>
            <div className="cart">
                <div><img src={img} alt="img" ></img></div>
                <div className="data"><p>I phone 11</p><span>price</span>:<span>10000</span></div>
                <div className="btnparent">
                    <button className="btn1" onClick={()=>props.addtocartHandler({price:10000})}>ADD TO CART</button>
                    <button className="btn2"onClick={()=>props.removetocartHandler()}>REMOVE TO CART</button>
                </div>
                
                
            </div>
        </div>
        <div style={{width: "566px"}}>
            <div className="cart">
                <div><img src={img} alt="img"></img></div>
                <div className="data"><p>I phone 11</p><span>price</span>:<span>10000</span></div>
                <div className="btnparent">
                    <button className="btn1" onClick={()=>props.addtocartHandler({price:10000})}>ADD TO CART</button>
                    <button className="btn2"onClick={()=>props.removetocartHandler()}>REMOVE TO CART</button>
                </div>
                
                
            </div>
        </div>
       
         </div>
        </>
      
        
    )
}