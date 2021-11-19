import React from 'react'

const Navbar = () => {
    return (

        < >
            <div className="nav">
                <div className="logo">
                    <h4 className="fs-3 font-weight-bolder">
                        Yashraj.
                    </h4>
                </div>
                <div className="navLinks">
                    <ul className="ul_nav">
                        <li className="li_nav">Home.</li>
                        <li className="li_nav">Features.</li>
                        <li className="li_nav">Services.</li>
                        <li className="li_nav">Listed.</li>
                        <li className="li_nav">Contact.</li>
                    </ul>
                </div>
                <div className="nav_btn">
                    <button className="signIn">Sign In</button>
                    <button className="Register">Register</button>
                </div>
            </div>
        </>

    )
}

export default Navbar
