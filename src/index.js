import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import TensionMember from './pages/TensionMember';
import FlexuralMember from './pages/FlexuralMember';
import Connection from './pages/Connection';
import BeamColumn from './pages/BeamColumn';
import PlateGirder from './pages/PlateGirder';
import TrussOsdag from './pages/TrussOsdag';
import TwoDframe from './pages/TwoDframe';
import ThreeDframe from './pages/ThreeDframe';
import GroupDesign from './pages/GroupDesign';
import CompressionMember from './pages/CompressionMember';
import ShearConnection from './pages/ShearConnection';
import TrusConnection from './pages/TrusConnection';
import MomentConnection from './pages/MomentConnection';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import TensionMember from './pages/TensionMember';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "connection",
    element: <Connection/>,
  },
  
  {
    path: "compression",
    element: <CompressionMember/>,
  },
  
  {
    path: "tension",
    element: <TensionMember/>,
  },

  {
    path: "flexural",
    element: <FlexuralMember/>,
  },
  {
    path: "beam",
    element: <BeamColumn/>,
  },
  {
    path: "plate",
    element: <PlateGirder/>,
  },
  {
    path: "trussOsdag",
    element: <TrussOsdag/>,
  },
  {
    path: "twoD",
    element: <TwoDframe/>,
  },
  {
    path: "threeD",
    element: <ThreeDframe/>,
  },
  {
    path: "group",
    element: <GroupDesign/>,
  },
 
  {
    path: "moment",
    element: <MomentConnection/>,
  },
  {
    path: "trus",
    element: <TrusConnection/>,
  },
  {
    path: "shear",
    element: <ShearConnection/>,
  }
  

 
]);



//import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <RouterProvider router={router}/>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

