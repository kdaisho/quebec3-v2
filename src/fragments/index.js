import { graphql } from 'gatsby'

export const BlogList = graphql`
  fragment BlogListFragment on Mdx {
    id
    slug
    frontmatter {
      date(formatString: "YYYY年M月DD日")
      title
      description
      thumb {
        childImageSharp {
          fluid {
            src
          }
          gatsbyImageData(
            width: 120
            height: 120
            transformOptions: { cropFocus: CENTER }
          )
        }
      }
    }
  }
`
