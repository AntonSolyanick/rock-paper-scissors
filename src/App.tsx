import { Provider } from "react-redux";
import store from "./store";

import Layout from "./layout/Layout";
import "./App.css";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <AnimatedRoutes></AnimatedRoutes>
      </Layout>
    </Provider>
  );
}

export default App;
