import Header from "../component/header";
import { connect } from "react-redux";
 const mapStateToProps=state=>({
   data:state.CardItem
 })
 const mapDispatchToProps=dispatch=>({

    
 })
 export  default connect(mapStateToProps,mapDispatchToProps)(Header)
