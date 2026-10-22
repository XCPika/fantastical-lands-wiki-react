import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from '../pages/home';
import Layout from '../pages/layout';
import ClassPage from "../pages/classes";
import RacePage from "../pages/races";
import StructurePage from "../pages/structures";
import ItemPage from "../pages/items";

function App() {

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "classes", element: <ClassPage /> },
          { path: "races", element: <RacePage /> },
          { path: "structures", element: <StructurePage /> },
          { path: "items", element: <ItemPage /> },
        ],
      }
    ],
    {
      basename: "/fantastical-lands-wiki-react",
      future: {
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }
    }
  );

  return (
    <>
      <div className="main">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
