import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Home } from "../Pages/Home";
import { Payments } from "../Pages/Payments";


export function Router() {

  return (
    <Routes>

      <Route path="/" element={<DefaultLayout />}>

      <Route path="/" element={<Home/>} />
      <Route path="/payments" element={<Payments/>} />

      </Route>
      
    </Routes>
  )
}