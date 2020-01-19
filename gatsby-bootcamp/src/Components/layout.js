import React from 'react'
import Header from '../Components/header'
import Footer from '../Components/footer'
import '../Styles/index.scss'

export default function layout(props) {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}
