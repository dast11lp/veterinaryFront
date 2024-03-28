import { HashRouter, Route, Routes } from "react-router-dom"
import { Header } from "../components/Header"
import { Home } from "../components/Home"
import { Contact } from "../components/Contact"
import { Services } from "../components/Services"
import { MyPets } from "../components/MyPets"
import { UserRegister } from "../components/UserRegister"
import { Login } from "../components/Login"
import { PetRegister } from "../components/PetRegister"

export const Routing = () => {
    return (
        <HashRouter>

            <div className="layout">
                <Header />
                <div className="layout__pages">
                    <div className="page">
                        <Routes>
                            <Route path="/">
                                <Route index element={<Home />} />
                                <Route path="/contacto" element={<Contact />} />
                                <Route path="/servicios" element={<Services />} />
                                <Route path="/mascotas" element={<MyPets />} />
                                <Route path="/registro" element={<UserRegister />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/registro/mascota" element={<PetRegister />} />
                            </Route>
                            <Route path="/private">

                            </Route>
                        </Routes>
                    </div>
                </div>
            </div>

        </HashRouter>

    )
}
