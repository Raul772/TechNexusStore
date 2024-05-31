import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "./App";
import Category from "./pages/Category/Category";
import DealsPage from "./pages/Deals/Deals";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import SecurityPolicy from "./pages/Security/SecurityPolicy";
import Signin from "./pages/Signin/Signin";
import Catalog from "./pages/Catalog/Catalog";

export const router = createBrowserRouter(createRoutesFromElements(

  <>
    <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/security-policy" element={<SecurityPolicy />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="/deals" element={<DealsPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/category/:slug" element={<Category />} />
        <Route path="*" element={<Error />} />
    </Route>
  </>

));