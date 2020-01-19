import React from 'react'
import Header from '../Components/header'
import Footer from '../Components/footer'

export default function layout(props) {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}
