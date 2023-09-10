import HomePage from "./pages/HomePage"
import  LoginPage from "./pages/LoginPage"
import  Cart from "./pages/Cart"
import SignUp from './pages/SignUp'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

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
]);

function App() {
  return (
      <div className=''>
          <RouterProvider router={router} />
      </div>
  )
}

export default App
