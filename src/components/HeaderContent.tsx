import { Link } from "react-router-dom";
import dogBackground from "../assets/img/dog-header.png";
export const HeaderContent = () => {
    return (
        <div className="header__content">
            <div className="header__content__left">
                <h1 className="header__content__left__title">Ellos tambien necesitan tu ayuda</h1>
                <p className="header__content__left__pg">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus temporibus, nisi autem provident repellendus accusamus et animi voluptatem.
                </p>
                <Link className="btn btn--flex text-dec-none" to="/contacto">More info</Link>
            </div>
            <div className="header__content__right"></div>
            <div className="header__content__bottom">
                <div className="header__content__bottom__info">
                    <p>Any info</p>
                    <b>Any info</b>
                </div>
                <div className="header__content__bottom__info">
                    <p>Any info</p>
                    <b>Any info</b>
                </div>
                <div className="header__content__bottom__info">
                    <p>Any info</p>
                    <b>Any info</b>
                </div>
                <div className="header__content__bottom__info">
                    <b>Any info</b>
                </div>
            </div>
            <div className="header__backgroud" style={{
                position: "absolute",
                zIndex: "-1",
                top: 0,
                background: `url(${dogBackground})`,
                backgroundSize: "cover",
                height: "100%",
                width: "100%",
                // clipPath: "ellipse(31% 52% at 61% 52%)"
                clipPath: "ellipse(30% 70% at 70% 40%)",
            }} />
        </div>
    )
}
