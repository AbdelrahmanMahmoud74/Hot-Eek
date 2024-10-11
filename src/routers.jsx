import { createHashRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./components/Home";




const routers = createHashRouter(
  createRoutesFromElements(
    <>
         

      <Route path="/" element={<Home />} >
      
      </Route>
    </>
  )
);

export default routers;
