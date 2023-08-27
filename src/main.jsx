import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./context/ProductContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-w2ssbc4h8rf41q23.us.auth0.com"
      clientId="G7o39MBy6lrvvFDLmvz9E4GU38mBaS00"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <AppProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AppProvider>
    </Auth0Provider>
  </React.StrictMode>
);
