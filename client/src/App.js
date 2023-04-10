import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import publicRoute from "./routes/publicRoutes";
import {useDispatch } from 'react-redux';
import { getAllBrands } from "./redux/shop/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrands());
  },[dispatch])
  return (
    <>
     <RouterProvider router={publicRoute} />
    </>
  );
}

export default App;
