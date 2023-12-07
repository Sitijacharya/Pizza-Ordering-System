import React from 'react';
import MultiplePizza from "../assets/multiplePizzas.jpeg"
import'../styles/About.css'
 function About () {
    return (
        <div className="about">
            <div className="aboutTop" style={{backgroundImage:`url(${MultiplePizza})` }}> 
            </div>
                <div className="aboutBottom">
                    <h1>ABOUT US</h1>
                    <p >
                   

Welcome to Sitij's Pizzeria – where passion for pizza meets a commitment to quality! Established with the goal of bringing authentic flavors and a delightful dining experience to our community, we take pride in being your go-to destination for mouthwatering pizzas.

At Sitij's Pizzeria, we believe that great pizza starts with exceptional ingredients. Our chefs meticulously select the finest, freshest produce and top-quality meats to craft each pizza with love and precision. From the moment you step through our doors, the enticing aroma of freshly baked crust, savory sauces, and perfectly melted cheese will transport you to a world of culinary delight.

What sets us apart is not just our commitment to taste but also our dedication to variety. Our menu features a diverse range of pizzas, from timeless classics to innovative creations that cater to every palate. Whether you're a fan of traditional Margherita, crave the bold flavors of BBQ Chicken, or prefer a veggie-packed Mediterranean delight, we have the perfect pizza for you.



Quality, flavor, and hospitality are the cornerstones of our pizza shop. From our kitchen to your table, we are dedicated to delivering an unparalleled pizza experience. Thank you for choosing Sitij's Pizzeria, where every slice is a celebration of taste and tradition. We look forward to serving you and becoming your favorite pizza destination in Kathmandu.
                    </p>

               
            </div>
        </div>
    )
 }
 export default About;