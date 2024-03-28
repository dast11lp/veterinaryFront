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
  },[])

  return (
    <div>
      <h1>MyPets</h1>
      <Link to="/registro/mascota">Registrar Mascota</Link>
      <div className="pet-list">
        {petList && petList.map((pet) => (
          <div>{pet.name}</div>
        ))}
      </div>
    </div>
  )
}
