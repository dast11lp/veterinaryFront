import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useAppDispatch } from "../app/store"
import { getPetListThunk } from "../api/pet";
import { useSelector } from "react-redux";
// import { Calendar } from "./Calendar"

export const MyPets = () => {

  const dispatch = useAppDispatch();

  const petList = useSelector(state => state.petReducer.petList)

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      const id = JSON.parse(userInfo).id
      dispatch(getPetListThunk(id))
    }

  }, [])

  return (
    <div>
      <h2>Mis Mascotas</h2>
      <Link to="/registro/mascota">Registrar Mascota</Link>
      <div className="my-pets">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Foto</th>
              <th>Nombre</th>
              <th>Administrar</th>
            </tr>
          </thead>
          <tbody>
            {petList && petList.map((pet, key) => (
              <tr key={key}>
                <td>{pet.id}</td>
                <td><img className="pet-photo" src="https://cdn.pixabay.com/photo/2023/11/30/07/04/shetland-sheepdog-8420917_1280.jpg" alt="Pet Photo" /></td>
                <td>{pet.name}</td>
                <td className="manager">
                  <Link to="">Perfil</Link>
                  <Link to="">Citas Agendadas</Link>
                  <Link to={`/agendarcita/${pet.id}`}>Agendar Cita</Link>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>


      </div>

    </div>
  )
}
