import { Component } from "react";
import './Complement.css'
class BackgroundCommon extends Component {
    render(){
    return(

        <div className="container-background">
            <img style={{ position: "absolute", zIndex: "10", marginTop: "110px" }} src="./assets/img/man.png"></img>
        </div>
    )
}
    
}

export default BackgroundCommon;