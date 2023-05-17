import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // Disable StrictMode if don't want to render components twice in development environment
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
)
