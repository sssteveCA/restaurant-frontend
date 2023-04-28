import React from 'react'
import './Footer.sass'
import SocialIcons from './social_icons/SocialIcons'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
        <div>Online restaurant</div>
        <div className='pt-5 sm:pt-0'>
            <ul className='footer-link'>
                <li><Link to='#'>Privacy</Link></li>
                <li><Link to='#'>Cookies</Link></li>
            </ul>
        </div>
        <div className='pt-5 md:pt-0'>
            <div>Via **********</div>
            <div>070******</div>
            <div>336******</div>
            <div>info@********</div>
        </div>
        <div className='flex flex-row justify-evenly pt-5 md:pt-0'>
            <SocialIcons />
        </div>
    </footer>
  )
}

export default Footer
