import { RouterProvider , Route , createBrowserRouter ,createRoutesFromElements } from "react-router-dom"
import HomePage from "./pages/HomePage"
import JobsPage from "./pages/JobsPage"
import AboutPage from "./pages/AboutPage"
import JobsDetails from './components/JobsDetails'
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element = {<HomePage/>} />
        <Route path="/Jobs">
          <Route index element={<JobsPage/>} />
          <Route path=":id" element ={<JobsDetails/>} />
        </Route>
        <Route path="/about" element = {<AboutPage/>} />
      </>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App