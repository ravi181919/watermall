import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AboutUs from './components/AboutUs.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ContactUs from './components/ContactUs.jsx'
import ViewFeedback from './components/ViewFeedback.jsx'
import AdminLogin from './components/AdminLogin.jsx'
import AdminClick from './components/AdminClick.jsx'
import AdminDashboard from './components/AdminDashboard.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Sendfeedback from './components/Sendfeedback.jsx'
import OrderDetailsPage from './components/OrderDetailsPage.jsx'
import Details from './components/template/Details.jsx'
import Cart from './components/template/Cart.jsx'
const router = createBrowserRouter([
  {path: '/',
    element:<App />
  },
  {path: '/home',
    element:<App />
  },
  {path: '/aboutus',
    element:<AboutUs />
  },
  {path: '/contactus',
    element:<ContactUs />
  },
  {path: '/login',
    element:<Login />
  },
  {path: '/signup',
    element:<Signup />
  },
  {path: '/view-feedback',
    element:<ViewFeedback />
  },
  {path: '/send-feedback',
    element:<Sendfeedback />
  },
  {path: '/adminlogin',
    element:<AdminLogin />
  },
  {path: '/adminclick',
    element:<AdminClick />
  },
  {path: '/admindashboard/',
    element:<AdminDashboard />
  },
  {path: '/orders/:id/',
    element:<OrderDetailsPage />
  },
  {path: '/detail/:id/',
    element:<Details />
  },
  {path: '/cart',
    element:<Cart />
  },

])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
