import React from 'react'
import bed from '../img/beds.svg'
import area from '../img/area.svg'
import lunch from '../img/lunch.svg'

const PropertyCard = (props) => {
    return (
        <>
            <div className="property_card">
                <img src={props.image} />
                <h2 className="property_price">
                    {props.price}
                </h2>
                <p className="text-secondary fs-6 text-center">{props.propertyAddress}</p>
                <div className="card_lower">
                    <p className="card_lower_p"><img src={bed} className="mx-2" />{props.beds} beds</p>
                    <p className="card_lower_p"><img src={lunch} className="mx-2" />{props.lunch} both</p>
                    <p className="card_lower_p"><img src={area} className="mx-2" />{props.area} Sqrt</p>
                </div>

            </div>
        </>
    )
}

export default PropertyCard
