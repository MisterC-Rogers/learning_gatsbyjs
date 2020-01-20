import React from 'react'
import { Link } from 'gatsby'
import Layout from '../Components/layout'

function NotFound() {
    return (
        <Layout>
            <h1>Page Not Found</h1>
            <p><Link to='/'>Home</Link></p>
        </Layout>
    )
}

export default NotFound
