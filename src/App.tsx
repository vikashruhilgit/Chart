import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { VictoryChart } from "./VictoryChart";
import { VisChart } from "./visChart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <VictoryChart />,
    },
    {
      path: "/vischart",
      element: <VisChart />,
    },
    {
      path: "/VictoryChart",
      element: <VictoryChart />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
