import { Component } from "react";
class BackgroundCommon extends Component {
    render(){
    return(

        <div className="container-background">
            <img style={{ position: "absolute", zIndex: "10", marginLeft: "-200px", marginTop: "110px" }} src="./assets/img/man.png"></img>
        </div>
    )
}
    
}

export default BackgroundCommon;