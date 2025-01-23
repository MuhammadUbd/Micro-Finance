import { Route, Routes } from 'react-router'
import { routes } from './routes'
import { Toaster } from "react-hot-toast"
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';


function App() {

  return (
    <>
      <Toaster />
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ path, element }, index) => {
            return (
              <Route path={path} element={element} key={index} />
            )
          })}
        </Route>
      </Routes>
    </>
  )
}

export default App
