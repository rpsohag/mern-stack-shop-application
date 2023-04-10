import { createBrowserRouter} from "react-router-dom"
import Brand from "../components/Brand/Brand";
import Category from "../components/Category/Category";
import Layout from "../components/Layout/Layout";
import Products from "../components/Products/Products";
import Tag from "../components/Tag/Tag";
import Admin from "../pages/Admin/Admin";
import Cart from "../pages/Cart/Cart";
import Shop from "../pages/Shop/Shop";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import WishList from "../pages/WishList/WishList";


const publicRoute = createBrowserRouter([
    {
        path : "/",
        element : <Layout/>,
        children : [
            {
                path : "/",
                element : <Shop/>
            },
            {
                path : "cart",
                element : <Cart/>
            },
            {
                path : "wishlist",
                element : <WishList/>
            },
            {
                path : "admin",
                element : <Admin/>,
                children : [
                    {
                        path : "brand",
                        element : <Brand/>
                    },
                    {
                        path : "products",
                        element : <Products/>
                    },
                    {
                        path : "tag",
                        element : <Tag/>
                    },
                    {
                        path : "category",
                        element : <Category/>
                    },
                ]
            },
            {
                path : "slug",
                element : <SingleProduct/>
            }
        ]
    }
]);

export default publicRoute;