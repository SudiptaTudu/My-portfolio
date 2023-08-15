import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Project  from './components/projects';
import Blog  from './components/blogs';
import About  from './components/about';
import Contact from "./components/contacts";
import Home from './components/home';
import SignIn from './formalities/signup';
import Login from './formalities/login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/blogs",
    element: <Blog></Blog>
  },
  {
    path: "/contacts",
    element: <Contact></Contact>
  },
  {
    path: "/about",
    element: <About></About>
  },
  {
    path: "/projects",
    element: <Project></Project>
  },
  {
    path: "/SignIn",
    element: <SignIn></SignIn>
  },
  {
    path: "/Login",
    element: <Login></Login>
  },
  
]);

export default function App() {
  return (
    <div className='app'>
        <RouterProvider router={router} />
    </div>
  );
}
