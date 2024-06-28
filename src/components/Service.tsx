import React from 'react'

interface Props  {
    img: string
    nameService: string
  }

const Service: React.FC<Props> = ({img, nameService}) => {

  return (
    <div className='service'>
      <img className='service__img' src={img} alt={nameService} />
      <p className='service__name'>{nameService}</p>
    </div>
  )
}

export default Service
