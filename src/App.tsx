import { useEffect } from "react"
import { Routing } from "./router/Routing"
import { useAppDispatch } from "./app/store"
import { verifyAuth } from "./features/auth/authSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => { 
    dispatch(verifyAuth())
  }, [])

  return (
    <Routing />
  )
}

export default App
