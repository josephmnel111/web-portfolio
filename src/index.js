import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FitnessAppDetails from './Components/Projects/IndividualProject/DetailsPages/FitnessAppDetails/fitness-app-details';
import JeopardyGameDetails from './Components/Projects/IndividualProject/DetailsPages/JeopardyGameDetails/jeopardy-game-details';
import OplogicAppDetails from './Components/Projects/IndividualProject/DetailsPages/OplogicAppDetails/oplogic-app-details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/web-portfolio",
    element: <App/>
  },
  {
    path: "/web-portfolio/fitness-app-details",
    element: <FitnessAppDetails/>,
  },
  {
    path: "/web-portfolio/jeopardy-game-details",
    element: <JeopardyGameDetails/>,
  },
  {
    path: "/web-portfolio/oplogic-app-details",
    element: <OplogicAppDetails/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
