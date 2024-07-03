import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import React from "react";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   if(process.env.NODE_ENV === 'production') {
//     <App />
//   } else {
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>

//   }
// );

const rootElement = document.getElementById("root");

if (process.env.NODE_ENV === "production") {
  ReactDOM.createRoot(rootElement!).render(<App />);
} else {
  ReactDOM.createRoot(rootElement!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
