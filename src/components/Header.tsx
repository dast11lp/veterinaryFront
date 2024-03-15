import { HeaderContent } from "./HeaderContent"
import { Navbar } from "./Navbar"
import dogBackground from "../assets/img/dog-header.png";

export const Header: React.FC = () => {
  return (
    <header className="header" >
      <Navbar />
      <HeaderContent />
      <div className="header__backgroud" style={{
        position: "absolute",
        zIndex: "80",
        background: `url(${dogBackground})`,
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
        // clipPath: "ellipse(31% 52% at 61% 52%)"
        clipPath: "ellipse(30% 70% at 70% 40%)"
        
      }} />
      <div className="header__backgroud" style={{
         background: `url(${dogBackground})`,
         backgroundSize: "cover",
         height: "100%",
         width: "100%",
         clipPath: "ellipse(29% 66% at 78% 40%)"
      }}/>

    </header>
  )
}
