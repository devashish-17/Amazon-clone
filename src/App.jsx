import HomePage from "./pages/HomePage"
import  LoginPage from "./pages/LoginPage"
import  Cart from "./pages/Cart"
import SignUp from './pages/SignUp'

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./index.css";
import ProductListPage from "./pages/ProductListPage";
import SingleProduct from "./pages/SingleProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: (<HomePage />),
    },
    {
        path: "/login",
        element: (<LoginPage />),
    },
    {
        path: "/cart",
        element: (<Cart />),
    },
    {
        path: "/signup",
        element: (<SignUp />),
    },
    {
        path: "/productlistpage",
        element: (<ProductListPage />),
    },
    {
        path: "/singleProduct",
        element: (<SingleProduct />),
    },
]);

function App() {
    return (
        <div className=''>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
