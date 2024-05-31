import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import SecurityPolicy from "./pages/Security/SecurityPolicy";

export const router = createBrowserRouter(createRoutesFromElements(

  <>
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/security-policy" element={<SecurityPolicy />} />
      <Route path="/signin" element={<Signin />} />
    </Route>
    
  </>

));