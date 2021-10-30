import React from 'react'
import wheat from '../img/logo.png'
import wheat2 from '../img/wheat.jpg'

export const Child = ({ items,location }) => {
    return (
        <>
            <div>
            <div className="banner" style={{
                backgroundImage:`linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)),url(${wheat2})`
            }}>
                <div className="navbar">
                    <img src={wheat} className="logo" alt="" />
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Profile</a></li>
                        <li><a href="/">Log Out</a></li>

                    </ul>
                </div>
                <div className="content">
                    <h1>Hello Harshit!</h1>
                    <p>Current tempeature in {location} is {items[0].temperature}&deg; C</p>
                    <div>
                        <button type="button"><span></span> More Info</button>
                        <button type="button"><span></span> Forecast</button>
                    </div>
                </div>
            </div>
            <div className="body">
                <p>Weather: Haze</p>
                <p>Maximum tempeature: 27.88&deg;C</p>
                <p>Minimum tempeature: 23.88&deg;C</p>
                <p>Wind Speed: 1.16 kmph</p>
            </div>
        </div>

        </>
    )
}