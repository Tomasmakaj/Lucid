import React from 'react'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import './Footer.css'

const Footer = () => {

    return (

        <div id='footer' className='footer'>
            <div className='col created-by'>
                <div className='col'>
                    <a href="https://www.linkedin.com/company/lucid-contracting-corp/" rel='noreferrer'><BsLinkedin className='icon' /></a>
                    <a href="https://www.instagram.com/lucidcontracting/" rel='noreferrer'><BsInstagram className='icon' /></a>
                    <a href="mailto: Tomas@LucidContractingCorp.com"><AiOutlineMail className='icon' /></a>
                </div>
            </div>
            <div>
                <div className='col'>
                    <p>Copyright © 2022 Lucid Contracting Corp. | All Rights Reserved |</p>
                    <p>40 W Main St Suite #110, Mt Kisco, NY 10549</p>
                    <p>914-483-6097</p>
                </div>
            </div>
        </div>
    )
}

export default Footer