// import { useState } from "react";

const Grocery=()=>{

    // const [testText,setTestText]=useState("");

    return (
        <>
        <h1>This is te grocery page and it contains a large number of components. It is a demo to show the lazy loading !!</h1>
        {/* <div className="output-container">
            <input value={testText}/>
        </div>
        <div className="test-container">
            <input type="text" className="test-input" placeholder="Enter text.." onChange={(e)=>{
                let s=e.target.value;
                s1=""
                for (let i=0;i<s.length;i++){
                    i%2==0 ? s1+=s[i] : s1+=""
                }
                setTestText(s1);
            }}/>
        </div> */}
        </>
    )
};

export default Grocery;