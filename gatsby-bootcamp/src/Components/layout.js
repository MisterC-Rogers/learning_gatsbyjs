import React from 'react'
import Header from '../Components/header'
import Footer from '../Components/footer'
import '../Styles/index.scss'
import layoutStyles from './layout.module.scss'

export default function layout(props) {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                {props.children}    
            </div>
            <Footer />
        </div>
    )
}
