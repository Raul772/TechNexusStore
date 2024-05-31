import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";

export const router = createBrowserRouter(createRoutesFromElements(

  <>
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
    </Route>
    <Route path="/signin" element={<Signin />} />
  </>

));