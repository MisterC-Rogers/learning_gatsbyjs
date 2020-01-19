import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../Components/layout'

const Blog = () => {
    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark{
            edges{
                node{
                    frontmatter{
                        title
                        date
                    }
                }
            }
        }
    }
    `)
    return (
        <Layout>
            <div>
                <h1>My Blog</h1>
                <ol>
                    {data.allMarkdownRemark.edges.map(edge => {
                        return(
                            <li>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <p>{edge.node.frontmatter.date}</p>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </Layout>
    )
}
export default Blog