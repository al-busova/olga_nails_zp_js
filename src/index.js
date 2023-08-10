import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { store, persistor } from "./redux/store";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./themas";

const root = ReactDOM.createRoot(
  document.getElementById("root") );
root.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> */}
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      {/* </PersistGate>
    </Provider> */}
  </React.StrictMode>
);

