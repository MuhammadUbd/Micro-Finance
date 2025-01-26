import { Route, Routes } from 'react-router'
import { routes } from './routes'
import { Toaster } from "react-hot-toast"
import Layout from './components/user/Layout'
// import Dashboard from './pages/Dashboard';
// import Layout from './components/user/Layout';


// const App = () => {

//   // Recursive function to render routes and their children
//   const renderRoutes = (routes) =>
//     routes.map(({ path, element, children }, index) => {
//       if (children) {
//         // If the route has children, recursively render them
//         return (
//           <Route path={path} element={element} key={index}>
//             {renderRoutes(children)}
//           </Route>
//         );
//       }
//       // Render the route without children
//       return <Route path={path} element={element} key={index} />;
//     });

//   return (
//     <>
//       <Toaster />
//       <Routes>
//         {renderRoutes(routes)}
//       </Routes>
//     </>
//   );
// }
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


export default App;


