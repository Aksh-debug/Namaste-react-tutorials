import React from "react";
import ReactDOM  from "react-dom/client";

const heading=React.createElement('h1',{id:'heading'},'H1 heading using React Element');

// React element
const JsxHeading= ()=>(
<h1 id="heading" className="head">H1 Heading using JSX</h1>
);

const reactElement=(
    <h1 id="reactelement">This is a react element
     <JsxHeading/>
    </h1>

);

const ParaComponent=()=>{
    return <p id="paraComponent">This is the para component</p>;
};

// React functional component
const HeadingComponent = ()=>(
    <div id="container">
    <ParaComponent/>
    {reactElement}
    <h1 id="headingComponent">Heading functional component</h1>
    </div>
);

const HeaderComponent=()=>(
    <div className="title">
        <div className="imgContainer">
            <img id="image" src="https://thumbs.dreamstime.com/b/javascript-logo-editorial-illustrative-white-background-javascript-logo-editorial-illustrative-white-background-eps-download-208329460.jpg"/>
            <img id="userIcon" src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"/>
        </div>
        <div className="inputContainer">
                <input id="inputBar" type="text" placeholder="Input here..."/>
        </div>
    </div>
);


const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeaderComponent />);