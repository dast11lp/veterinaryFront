import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import { useParams } from "react-router-dom"

const ServiceInfo = () => {

    const { idService } = useParams<{ idService: string }>();

    const idServiceparseInt: number | null = idService ? Number.parseInt(idService) : null


    const service = useSelector((state: RootState) =>
        state.getServicesSlice.services.find(service => service.id === idServiceparseInt)
    );




    return (
        <div>
            <h2>{service?.title}</h2>
            <p>{service?.paragraph}</p>
        </div>
    )
}

export default ServiceInfo
