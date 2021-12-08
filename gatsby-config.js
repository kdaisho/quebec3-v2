module.exports = {
  siteMetadata: {
    siteUrl: 'https://quebec3.com',
    title: 'Quebec3 - 海外移住ポータル',
    description:
      'Quebec3は、モントリオール在住のとある日本人により運営されている気ままな個人のブログです。モントリオール/ケベック州での生活ぶりを勝手な視点から書いています。このブログには将来海外に住んでみたいと思っている人、留学を考えている人、または日本の労働環境があまりに劣悪なため日本脱出を考えている人のモチベーションを上げる効果があります。これまで日本だけでずーっと過ごして来た人、英語を勉強している人、日本国籍を捨ててみたい人、外国に移住したい人、海外でエンジニアになりたい人、皆で仲良くQuebec3を読んでカナダ移住を追体験してください。海外移住での生活情報、カナダ移住、ケベック州とは、モントリオールでの生活、英語や英会話、海外移住者ブログ、カナダでの離婚手続き、日本国籍の捨て方、海外でエンジニアやモントリオールでのフランス語などについて情報発信しています。',
    image:
      'https://res.cloudinary.com/de9x7yfyb/image/upload/v1637543915/samples/qc3/profile/2021-profile-bright-opt.jpg',
  },
  plugins: [
    'gatsby-plugin-root-import', // Enables absolute paths for import (e.g. 'src/components' instead of '../../components')
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet', // Enables to set HTML head element

    // This set of plugins is to enable creating MDX blog posts from the src/posts folder
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          posts: require.resolve('./src/templates/article.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              path: `${__dirname}/src/images`,
              maxWidth: 680,
            },
          },
        ],
      },
    },
    // End of MDX config
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
  ],
}
