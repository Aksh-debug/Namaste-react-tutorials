import { useState } from "react";

const User=(props)=>{
    const {name}=props;
    const [count1]=useState(0);
    return (
        <div className="user-card">
            <h3>Count1: {count1}</h3>
            <h2>Name: {name}</h2>
            <h3>Location: Mathura, Uttar Pradesh</h3>
            <h4>Contact: rajawatshobhit4@gmail.com</h4>
        </div>
    )
};

export default User;