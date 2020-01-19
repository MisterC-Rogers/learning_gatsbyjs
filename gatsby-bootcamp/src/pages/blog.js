import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../Components/layout'
import blogStyles from './blog.module.scss'

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
                    fields {
                        slug
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
                <ol className={blogStyles.posts}>
                    {data.allMarkdownRemark.edges.map(edge => {
                        return(
                            <li className={blogStyles.post}>
                                <Link to={`/blog/${edge.node.fields.slug}`}>
                                    <h2>{edge.node.frontmatter.title}</h2>
                                    <p>{edge.node.frontmatter.date}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </Layout>
    )
}
export default Blog