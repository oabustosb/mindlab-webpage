module.exports = {
  
  siteMetadata: {
    siteUrl: "https://www.ingenieria.unal.edu.co/mindlab",
    title: "MindLab",
  },

  plugins: [
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [        
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1024,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: `${__dirname}/src/markdown/`,
      },
      __key: "markdown",
    },
    {
      resolve: `gatsby-source-google-scholar`,
      options: {
        queries: [`author:"Fabio A. González" 2022`, `author:"Fabio A. González" 2021`, `author:"Fabio A. González" 2020`],
      },
    },
    
  ],
};
