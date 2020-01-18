import React from 'react'
import { Link } from 'gatsby'
import Header from '../Components/header'
import Footer from '../Components/footer'

export default function contact() {
    return (
    <>
        <Header />
        <div>
            <h1>Contact Me</h1>
            <p>You can contact me through Twitter <a href="https://twitter.com/@MisterCRogers" target="_blank">@MisterCRogers</a></p>
        </div>
        <Footer />
    </>
    )
}
