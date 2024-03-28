import { useEffect, useState } from "react"

export const Calendar = () => {

    const [date, setDate] = useState(new Date('February  17, 2024 03:24:00'));

    useEffect(() => {
        console.log(date.getMonth());
        
        setDateOnMonday()
        console.log("lengthMonth: ", lengthMonth());
        
    },[])


    const setDateOnMonday = () => {
        if(date.getDay() !== 0) {
            setDate(new Date (date.getDay() - date.getDay()))
        }
        console.log(date.getDay())
    }

    const lengthMonth = () => {
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return new Date (year, month, 0).getDate()
    }

    return (
        <div className="calendar">
            <div className="calendar__row">
                <h1></h1>
            </div>
            <div className="calendar__row calendar__row--header">
                <div className="calendar__row__column">D</div>
                <div className="calendar__row__column">L</div>
                <div className="calendar__row__column">M</div>
                <div className="calendar__row__column">M</div>
                <div className="calendar__row__column">J</div>
                <div className="calendar__row__column">V</div>
                <div className="calendar__row__column">S</div>
            </div>
            <div className="calendar__row calendar__row--content">
                <div className="calendar__row__column">D</div>
            </div>
        </div>
    )
}
