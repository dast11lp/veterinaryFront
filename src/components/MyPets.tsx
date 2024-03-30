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
    const id = JSON.parse(localStorage.getItem("userInfo")).id
    dispatch(getPetListThunk(id))
  }, [])

  return (
    <div>
      <h1>MyPets</h1>
      <Link to="/registro/mascota">Registrar Mascota</Link>
      <div className="my-pets">

        {/* <div className="list">
          <div className="list__row">
            <div className="list__row__cell list__row__cell--title">Id</div>
            <div className="list__row__cell list__row__cell--title">Foto</div>
            <div className="list__row__cell list__row__cell--title">Nombre</div>
            <div className="list__row__cell list__row__cell--title">Perfil</div>
          </div>

          {petList && petList.map((pet, i) => (
            <div key={pet.id} className="list__row">
              <div className="list__row__cell">{pet.id}</div>
              <div className="list__row__cell"><img src="" alt="Photo Pet" /></div>
              <div className="list__row__cell">{pet.name}</div>
              <div className="list__row__cell"><Link to={""}>Ver</Link></div>
            </div>
          ))}

        </div> */}


        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Foto</th>
              <th>Nombre</th>
              <th>Detalle</th>
            </tr>
          </thead>
          <tbody>
            {petList && petList.map((pet, key) => (
              <tr key={key}>
                <td>{pet.id}</td>
                <td><img className="pet-photo" src="https://cdn.pixabay.com/photo/2023/11/30/07/04/shetland-sheepdog-8420917_1280.jpg" alt="Pet Photo" /></td>
                <td>{pet.name}</td>
                <td><Link to="">ver</Link></td>
              </tr>
            ))}
          </tbody>
        </table>


      </div>

    </div>
  )
}
