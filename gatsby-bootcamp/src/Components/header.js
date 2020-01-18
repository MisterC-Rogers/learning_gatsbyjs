import React from 'react'
import { Link } from "gatsby"

export default function header() {
    return (
        <div>
            <h1>This Is My Sign</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </div>
    )
}
