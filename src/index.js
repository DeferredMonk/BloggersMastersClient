import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { initialize } from "./keycloak"

const root = ReactDOM.createRoot(document.getElementById("root"))

const setup = async () => {
  try {
    await initialize()
    return root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  } catch (e) {
    return root.render(
      <React.StrictMode>
        <div>Error connecting to keycloak</div>
      </React.StrictMode>
    )
  }
}
setup()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
