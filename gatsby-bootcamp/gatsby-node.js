const path = require('path');

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if(node.internal.type === 'MarkdownRemark'){
        const slug = path.basename(node.fileAbsolutePath, '.md');
        //adds the slug to each blog post
        createNodeField({
            node, 
            name: 'slug', 
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`./src/Templates/blog.js`)
    const res = await graphql(`
        query{
            allMarkdownRemark{
                edges{
                    node{
                        fields{
                            slug
                        }
                    }
                }
            }
        }
    `)
    
    res.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
            component: blogPostTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}