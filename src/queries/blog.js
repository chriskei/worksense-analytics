import { graphql } from 'gatsby';

export const BLOG_PAGE_QUERY = graphql`
{
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson {
      edges {
        node {
          name
        }
      }
    }
    contentfulMission(contentful_id: {eq: "7gUKBwGUT1zwBwBRViQGFk"}) {
      id
      text {
        text
      }
    }
  }
`
