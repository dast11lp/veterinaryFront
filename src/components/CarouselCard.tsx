import cat from '../assets/img/cat.png'

export const CarouselCard = () => {
    return (
        <div className="card-carousel">
            <div className="card-carousel__content">
                <h3 className="card-carousel__content__title">Lorem ipsum dolor sit</h3>
                <p className="card-carousel__content__pg">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad molestiae provident
                </p>
                <a href="">Read more</a>
            </div>
            <div className='card-carousel__image'>
                <img className="card-carousel__image__img" src={cat} alt="cat" />
            </div>
        </div>
    )
}
