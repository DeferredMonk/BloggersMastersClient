import keycloak from "./keycloak"

function App() {
  console.log(keycloak.token)
  return (
    <div className="App">
      <button onClick={() => keycloak.login()}>sign in</button>
    </div>
  )
}

export default App
