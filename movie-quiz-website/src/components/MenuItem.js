import React from 'react'

function MenuItem({ image, name, price }) { // Accept props and render UI based on props
    return (
        <div className="menuItem">
            {/* Image of the item */}
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            {/* Name of the item */}
            <h1> {name} </h1>
            {/* Price of the item */}
            <p> Rating: {price} </p>
        </div>
    )
}

export default MenuItem
