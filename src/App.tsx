import { Header } from "./components/Header"
import { Home } from "./components/Home"

function App() {

  return (
    <div className="layout">
      <Header />
      <div className="layout__pages">
        <div className="page">
         <Home />
        </div>
      </div>
    </div>
  )
}

export default App
