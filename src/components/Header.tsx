import { useLocation } from "react-router-dom"
import { HeaderContent } from "./HeaderContent"
import { Navbar } from "./Navbar"
import { useEffect, useState } from "react"


export const Header: React.FC = () => {

  const location = useLocation()
  const [homePlaced, setHomePlaced]= useState(false);
  useEffect(()=> {
    if(location.pathname === '/')
      setHomePlaced(true)
    else
      setHomePlaced(false)
  }, [location.pathname])

  return (
    <header className="header" style={{
      minHeight: `${homePlaced === true ? '100vh': ''}`
    }}>
      <Navbar />
      { homePlaced === true ? <HeaderContent /> : null}
    </header>
  )
}
