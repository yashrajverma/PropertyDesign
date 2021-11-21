import React, { useEffect } from 'react'
import bed from '../img/beds.svg'
import area from '../img/area.svg'
import lunch from '../img/lunch.svg'
import Tilt from 'react-parallax-tilt';

const PropertyCard = (props) => {
    const method = () => {
        const $card = document.querySelector('.property_card');
        let bounds;

        function rotateToMouse(e) {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const leftX = mouseX - bounds.x;
            const topY = mouseY - bounds.y;
            const center = {
                x: leftX - bounds.width / 2,
                y: topY - bounds.height / 2
            }
            const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

            $card.style.transform = `
    scale3d(1.07, 1.07, 1.07)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance) * 3}deg
    )
  `;

            //             $card.querySelector('.glow').style.backgroundImage = `
            //     radial-gradient(
            //       circle at
            //       ${center.x * 2 + bounds.width / 2}px
            //       ${center.y * 2 + bounds.height / 2}px,
            //       #ffffff55,
            //       #0000000f
            //     )
            //   `;
        }

        $card.addEventListener('mouseenter', () => {
            bounds = $card.getBoundingClientRect();
            document.addEventListener('mousemove', rotateToMouse);
        });

        $card.addEventListener('mouseleave', () => {
            document.removeEventListener('mousemove', rotateToMouse);
            $card.style.transform = '';
            $card.style.background = '';
        });
    }
    useEffect(() => {
        // method()
    }, [])
    return (
        <>
            <Tilt>
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
            </Tilt>

        </>
    )
}

export default PropertyCard
