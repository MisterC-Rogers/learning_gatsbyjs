import React from 'react'
import Layout from '../Components/layout'
import Head from '../Components/head'

export default function contact() {
    return (
        <Layout>
            <Head title='Contact' />
            <div>
                <h1>Contact Me</h1>
                <p>You can contact me through Twitter <a href="https://twitter.com/@MisterCRogers" target="_blank" rel='noopener noreferrer'>@MisterCRogers</a></p>
            </div>
        </Layout>
    )
}
