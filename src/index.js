// // index.js or AppWrapper.js
// import React from "react";
// import ReactDOM from "react-dom";
// import UserAuthContext from "./pages/UserAuthContext";
// import App from "./App";

// ReactDOM.render(
//     <UserAuthContext>
//         <App />
//     </UserAuthContext>,
//     document.getElementById("root")
// );


// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';

// const root = createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(<App />);
