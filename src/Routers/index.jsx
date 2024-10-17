// routers.js
import { createHashRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "../components/home";
import Category from '../components/category';
import Layout from '../pages/layout';

const routers = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="category" element={<Category />} /> {/* مسار Category */}
      </Route>
    </>
  )
);

export default routers;
