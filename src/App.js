import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Products from "./pages/Products";


const router = createBrowserRouter([
{ path: '/', element: <Home />, errorElement: <Error />},
  { path: '/products', element: <Products />},
])
function App() {
  return <RouterProvider router={router} />;
}

export default App;