import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/Router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
