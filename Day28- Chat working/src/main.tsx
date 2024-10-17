import ReactDOM from "react-dom/client";
import LandingPage from "./pages/landing";
import './assets/css/main.css'
import { RouterConfig } from "./config/router.config";
import { Provider } from "react-redux";
import store from "./config/store.config";

const rootElem = ReactDOM.createRoot(document.getElementById("root") as any);
rootElem.render(
  <h1>
    <Provider store={store}>
    <RouterConfig />
    </Provider>
  </h1>
);
