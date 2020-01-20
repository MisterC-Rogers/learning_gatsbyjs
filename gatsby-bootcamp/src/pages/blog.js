import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../Components/layout'
import blogStyles from './blog.module.scss'
import Head from '../Components/head'

const Blog = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost(
        sort: {
          fields: publishedDate,
          order:DESC
        }
      ){
        edges{
          node{
            title
            slug
            publishedDate(formatString:"MMMM Do, YYYY")
          }
        }
      }
    }
    `)
    return (
        <Layout>
          <Head title='Blog'/>
            <div>
                <h1>My Blog</h1>
                <ol className={blogStyles.posts}>
                    {data.allContentfulBlogPost.edges.map(edge => {
                        return(
                            <li className={blogStyles.post}>
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <h2>{edge.node.title}</h2>
                                    <p>{edge.node.publishedDate}</p>
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