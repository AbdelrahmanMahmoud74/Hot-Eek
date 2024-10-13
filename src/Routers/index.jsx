import { createHashRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "../components/Home";
import Category from '../components/Category'



const routers = createHashRouter(
  createRoutesFromElements(
    <>
         

      <Route path="/" element={<Home />} >
      <Route path="/category" element={<Category />} />
      </Route>
      
     
    </>
  )
);

export default routers;
