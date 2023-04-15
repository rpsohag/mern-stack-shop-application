import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import publicRoute from "./routes/publicRoutes";
import {useDispatch } from 'react-redux';
import { getAllBrands } from "./redux/brand/actions";
import { getAllCategories } from "./redux/category/actions";
import { getAllTags } from "./redux/tag/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrands());
    dispatch(getAllCategories());
    dispatch(getAllTags());
  },[dispatch])
  return (
    <>
     <RouterProvider router={publicRoute} />
    </>
  );
}

export default App;
