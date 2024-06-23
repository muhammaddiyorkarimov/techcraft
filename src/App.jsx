import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import Home from "./pages/Home/Home"
import AboutUs from "./pages/aboutUs/AboutUs"
import Service from './services/Service';
import Teams from "./pages/Teams/Teams";
import WeContact from "./pages/Contact/WeContact";

function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="about-us" element={<AboutUs/>}/>
        <Route path="services" element={<Service/>}/>
        <Route path="teams" element={<Teams/>}/>
        <Route path="contact" element={<WeContact/>}/>
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App