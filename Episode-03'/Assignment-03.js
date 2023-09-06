import React from "react";
import ReactDOM from "react-dom/client";


// nested Headers using React.createElement

// const nestedHeader=React.createElement("div",{class:"title"},[
//     React.createElement("h1",{},[
//         React.createElement("h2",{},[
//             React.createElement("h3",{},"I am H3 Tag!!")
//         ])
//     ])
// ]);

// const root1=ReactDOM.createRoot(document.getElementById('root2'));
// root1.render(nestedHeader);


// nested headers using JSX

// const nestedHeader=(
//     <div className="title">
//         <h1>
//             <h2>
//                 <h3>I am H3 Tag!!!</h3>
//             </h2>
//         </h1>
//     </div>
// );

// const root1=ReactDOM.createRoot(document.getElementById('root1'));
// root1.render(nestedHeader);

// functional components using JSX

// const NestedHeaders=()=>(
//     <div className="title">
//         <h1>
//             <h2>
//                 <h3>I am H3 tag!!@!</h3>
//             </h2>
//         </h1>
//     </div>
// )


// Adding a component inside NestedHeaders component --> component composition

// const AddComponent=()=><p className='paraTag'>I am a para taggg..</p>;

// const NestedHeaders=()=>(
//     <div className="title">
//         <AddComponent/>
//         <h1>
//             <h2>
//                 <h3>I am H3 tag!!@!</h3>
//             </h2>
//         </h1>
//     </div>
// )

// Header component from Scratch using functional components using JSX 

// const HeaderComponent=()=>(
//     <div className="title">
//         <div className="imgContainer">
//             <img id="image" src="https://thumbs.dreamstime.com/b/javascript-logo-editorial-illustrative-white-background-javascript-logo-editorial-illustrative-white-background-eps-download-208329460.jpg"/>
//             <img id="userIcon" src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"/>
//         </div>
//         <div className="inputContainer">
//                 <input id="inputBar" type="text" placeholder="Input here..."/>
//         </div>
//     </div>
// );


