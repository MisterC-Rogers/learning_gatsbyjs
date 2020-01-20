import React from 'react'
import { Link } from 'gatsby'
import Layout from '../Components/layout'
import Head from '../Components/head'

function NotFound() {
    return (
        <Layout>
            <Head title='Page Not Found' />
            <h1>Page Not Found</h1>
            <p><Link to='/'>Home</Link></p>
        </Layout>
    )
}

export default NotFound
