import { graphql } from 'gatsby'

export const BlogList = graphql`
  fragment BlogListFragment on Mdx {
    id
    slug
    frontmatter {
      date(formatString: "YYYY年M月DD日")
      thumb
      title
      description
    }
  }
`
