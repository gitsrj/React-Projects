import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home, About, Contact, User, Github } from './components'
import { githubInfoLoader } from './components/Github/Github.jsx'    // loader - for optimization, hover karne par hi fetch request chali jati hai
                                                                    // jaha api call hoti hai

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>   // (root) iske andar 'Outlet' hai isiliye sare children aa pa rahe hai
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}>
        <Route path='srj' />
      </Route>
      <Route path='contact' element={<Contact />}/>
      <Route path='user/:userid' element={<User />}/>
      <Route 
        loader={githubInfoLoader}
        path='github' 
        element={<Github />}
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
