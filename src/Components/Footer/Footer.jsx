import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <p className='footerTopText'>© 2019-2023 CarinaBot.com</p>
            <div className="footerLinks">
                <Link to='/terms'>Terms</Link>
                <Link to='/terms-vps'>Terms for VPS</Link>
                <Link to='/privacy'>Privacy & Cookies</Link>
            </div>

            <p className='footerBottomText'>CarinaBot is an AI-powered, automated analytical software that you can connect to your account. It conducts market analysis and provides you with real-time insights.</p>
        </footer>
    )
}

export default Footer