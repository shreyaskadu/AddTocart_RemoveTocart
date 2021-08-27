import Homecontent from "../component/home";
import { connect } from "react-redux";
import {addtocart,removetocart} from "../services/action/index"
 const mapStateToProps=state=>({
   data:state.CardItem
 })
 const mapDispatchToProps=dispatch=>({

  addtocartHandler:data=>dispatch(addtocart(data)),
  removetocartHandler:data=>dispatch(removetocart(data))
 })
 export  default connect(mapStateToProps,mapDispatchToProps)(Homecontent)
