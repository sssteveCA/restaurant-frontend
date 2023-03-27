import React from 'react'
import './Footer.sass'

const Footer = () => {
  return (
    <footer className='bg-black px-6 py-10 mt-5 text-white'>
        <div>Online restaurant</div>
        <div>
            <ul className='footer-link'>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Cookies</a></li>
            </ul>
        </div>
        <div>
            <div>Via **********</div>
            <div>070******</div>
            <div>336******</div>
        </div>
        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </footer>
  )
}

export default Footer
