// import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";

//let us make About as class Component 

class About extends Component{
    constructor(props){
        super(props);

    }

    //In classed based component we dont have hooks


    render(){
        return(
            <div>
            <h1>This is About Us Page </h1>
            <div>
              LoggedInUser
              <UserContext.Consumer>
                {({loggedInUser})=>(<h1 className="font-bold">{loggedInUser}</h1>)}
              </UserContext.Consumer>
            </div>
            <h2>Hey my name is Aman Upadhyay !!</h2>
            {/* <User name={"Aman Upadhyay "} location={"Greater Noida"}/> //This is used for the functional based component */}
            <UserClass name={"Aman Upadhyay "} location={"Greater Noida"}/>
    
            </div>
        );
    };
    
}

// const About=()=>{
//     return(
//         <div>
//         <h1>This is About Us Page </h1>
//         <h2>Hey my name is Aman Upadhyay !!</h2>
//         {/* <User name={"Aman Upadhyay "} location={"Greater Noida"}/> //This is used for the functional based component */}
//         <UserClass name={"Aman Upadhyay "} location={"Greater Noida"}/>
//         </div>
//     )
// }

export default About;