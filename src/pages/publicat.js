import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import { titleBlock, papersContainer } from '../css/publications.module.css'


let since = 2020

const PubliPage = () => {

    const data = useStaticQuery(graphql`
      { 
        pubs: allGoogleScholar(sort: {fields: year, order: DESC}) { 
          nodes {
            id
            title
            url
            authors {
              name
              url
            }
            preEtAl
            postEtAl
            abstract
            year
            journal
            pdfUrl
            citedByCount
            citedByUrl
            relatedUrl
            allVersionsUrl
          }
        }
    
      }
    `)

    const clean = data.pubs.nodes.filter(function(pub){ 
      return pub.year >= since;
    });

    return (
      <Layout pageTitle={"Publications"}>

        <div className={titleBlock}>
          <h1>Publications</h1> 
        </div>

        <div className={papersContainer}>
          <table>

          {clean.map((pub) => (
            <tr>
             <div>
              <h3><a href={pub.url}>{pub.title}</a>, {pub.year}</h3>
              <p>{pub.abstract}</p>

              <div>
                <div />
                {pub.preEtAl && <span>..., </span>}
                {pub.authors.map((author, index) => (
                  <span>
                    {index > 0 && ', '}
                    {author.url ? (
                      <a href={author.url}>{author.name}</a>
                    ) : (
                      author.name
                    )}
                  </span>
                ))}
                {pub.postEtAl && <span>, ...</span>}
                <span> | </span>
                {pub.journal && (
                <span><strong>
                  {pub.journal}
                </strong></span>
                )}
                <span> | </span>
                {pub.pdfUrl && (
                <span><strong>
                  ( <a href={pub.pdfUrl}>PDF</a> )
                </strong></span>
                )}
              </div>
              
             </div>
            </tr>
          ))}

          </table>
        </div>

      </Layout>
    )

}
 


export default PubliPage