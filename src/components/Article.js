import React from 'react'
import image1 from './imagenes/Rectangle 1.png'
import './styles/Article.css'
import foto from './imagenes/Ellipse 1.png'
import { Container } from './Container'
function Article() {
    return (
        
        <div class="wrapper">
            <div class="card">
            <img src={foto} alt="" />
            <Container/>
            </div>
        </div>
    )
}

export {Article}
