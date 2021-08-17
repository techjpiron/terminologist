import store from "../store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import Navbar from "../components/Navbar";

import "../styles/tailwind.css";

const App = ({ Component, pageProps }) => {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="min-h-screen bg-gray-200 p-8">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
