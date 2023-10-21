import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

//Pages
import RootLayout from './pages/RootLayout'

const router = (
  createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
      <Route path='home-1' element={<></>}/>
      <Route path='home-2'  element={<></>}/>
      <Route path='home-3'  element={<></>}/>
      </Route>
    )
  )
)
function App() {
  
  return <RouterProvider router={router} />
}

export default App
