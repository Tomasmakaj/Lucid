import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import './Footer.css'

const Footer = () => {

    return (

        <div id='footer' className='footer'>
            <div className='col created-by'>
                <div className='col'>
                    <a href="https://www.instagram.com/lucidcontracting/" rel='noreferrer'><BsInstagram className='icon' /></a>
                </div>
            </div>
            <div>
                <div className='col'>
                    <p>Copyright © 2022 Lucid Contracting Corp. | All Rights Reserved |</p>
                    <p>291 Agor Ln, Mahopac NY 10541</p>
                    <p>914-483-6097</p>
                </div>
            </div>
        </div>
    )
}

export default Footer