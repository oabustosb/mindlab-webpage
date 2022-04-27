import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { titleBlock, staff } from "../css/markdown-styles.module.css"


export default function MarkdownTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;
  console.log(frontmatter)

  if (frontmatter.type === "Publications") {
    return (
        <Layout pageTitle={frontmatter.title}>

          <div className={titleBlock}>
            <h1>{frontmatter.title}</h1>
          </div>
        
          <div className={staff}
          dangerouslySetInnerHTML={{ __html: html }} />

        </Layout>
    );
  } 
  else if (frontmatter.type === "People") {
    return (
      <Layout pageTitle={frontmatter.title}>

        <div className={titleBlock}>
          <h1>People</h1>
          <p>Our team includes Ph.D. and M.Sc. students, guided by professors from
             Systems and Industrial Engineering at Universidad Nacional de Colombia. </p>
        </div>
      
        <div dangerouslySetInnerHTML={{ __html: html }} />

      </Layout>
    );
  }
  else if (frontmatter.type === "ResearchLine") {
    return (
      <Layout pageTitle={frontmatter.title}>

        <div className={titleBlock}>
          <h1>Research Lines</h1>
          <p>The lab's research focuses on machine learning and its applications. We are 
             interested in the foundations of machine learning and how it is used to solve 
             challenging problems. </p>
        </div>

        <div dangerouslySetInnerHTML={{ __html: html }} />

      </Layout>
    )
  }
  else {
      console.log("Markdown type error");
      return (<div></div>);
  }
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        type
      }
    }
  }
`;