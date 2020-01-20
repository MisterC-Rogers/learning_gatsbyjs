import React from 'react'
import { Link } from 'gatsby'
import Layout from '../Components/layout'
import Head from '../Components/head'

export default function about() {
    return (
        <Layout>
            <Head title='About' />
            <div>
                <h1>About Me</h1>
                <p>This will hold info about me.</p>
                <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
            </div>
        </Layout>
    )
}
