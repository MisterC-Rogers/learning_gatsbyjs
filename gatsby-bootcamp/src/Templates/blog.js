import React from 'react'
import Layout from '../Components/layout' 
import { graphql } from 'gatsby'

export const query = graphql`
    query($slug: String!){
        markdownRemark(fields: { slug: { eq: $slug } }){
            frontmatter{
                title
                date
            }
            html
        }
    }
    `

const Blog = (props) => {
    console.log(props);
    
    return (
        <Layout>
            <h1>   
                {props.data.markdownRemark.frontmatter.title}
            </h1>
            <p>
                {props.data.markdownRemark.frontmatter.date}
            </p>
            {/* render the HTML form the markdown */}
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
        </Layout>
    )
}

export default Blog