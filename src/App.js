import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import appStore from "./utils/appStore";
import Browse from "./components/Browse";
import Login from "./components/Login";

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter}>
        <></>
      </RouterProvider>
    </Provider>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

export default App;
