import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
    }
    
    render(){
        return (
            <div>
                <h1>About Us</h1>
                <UserClass name={"Aditya Rajawat"}/>
            </div>
        )
    }
};



export default About;