import React from 'react'

const Card = ({ title, description, image, onInquire }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={onInquire} className="inquire-button">상담문의하기</button>
      </div>
    </div>
  )
}

export default Card

