import "./App.css"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"

function App() {


  return (
    <>
      <div id="app">
        <NavBar/>
        <ItemListContainer saludo = {"Bienvenidos a digitalSpawn"} />
      </div>
      
    </>
  )
}

export default App
