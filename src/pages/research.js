import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import ResearchBlock from '../components/research-line-block'
import {titleBlock, researchTitle, researchImage} from '../css/research.module.css'

const ResearchPage = () => {
    return (
      <Layout pageTitle={"Research"}>

        <div className={titleBlock}>
          <h1>Research Lines</h1>
          <p>The lab's research focuses on machine learning and its applications. We are 
              interested in the foundations of machine learning and how it is used to solve 
              challenging problems. </p>
        </div>

        <div id='kernel' className={researchTitle}>
          <h2>Hybrid Kernel Methods</h2>
        </div> 
        <ResearchBlock>
          <StaticImage alt="Hybrid Kernel Methods" src='..\images\kernelmethods.png' 
          objectFit='fill' className={researchImage}/>
          <div>
            <p>We aim to obtain effective and efficient kernel methods that compete on par with deep learning. 
               For this, we are developing methods for learning a mapping between the features of the input 
               sample and the labels, which is later used to predict labels for unannotated instances.
            </p>
            <ul>
              <Link to="../research-lines/kernel"><li>Learn more...</li></Link>
            </ul>
          </div>
        </ResearchBlock>

        <div id='quantum' className={researchTitle}>
          <h2>Quantum Machine Learning</h2>
        </div> 
        <ResearchBlock>
          <StaticImage alt="Quantum Machine Learning" src='..\images\quantum.png' 
          objectFit='fill' className={researchImage}/>
          <div>
            <p>We are excited with this new research line, integrating classic and quantum algorithms 
               and insights to perform quantum measurement and density estimation.
            </p>
            <ul>
              <Link to="../research-lines/quantum"><li>Learn more...</li></Link>
            </ul>
          </div>
        </ResearchBlock>

        <div id='multimodal' className={researchTitle}>
          <h2>Multimodal Learning</h2>
        </div> 
        <ResearchBlock>
          <StaticImage alt="Multimodal Learning" src='..\images\multimodal.png'
          objectFit='fill' className={researchImage}/>
          <div>
          <p>In multimodal learning we have developed models for learning an intermediate representation 
             through multimodal information fusion. Our models take advantage of additional information 
             provided by multimodal data, and combine them, using data fusion techniques to improve 
             information retrieval performance.
          </p>
            <ul>
              <Link to="../research-lines/multimodal"><li>Learn more...</li></Link>
            </ul>
          </div>
        </ResearchBlock>

        <div id='medical' className={researchTitle}>
          <h2>Medical Image Analysis</h2>
        </div>        
        <ResearchBlock>
          <StaticImage alt="Medical Image Analysis" src='..\images\medical-images.png' 
          objectFit='fill' className={researchImage}/>
          <div>
            <p>We develop and integrate Computer Vision in the medical image analysis for two main purposes: 
               automatic pattern finding related with pathology signatures associated with healthy and 
               abnormal tissues, and automatic evaluation of diseases using Ophthalmic images.
            </p>
            <ul>
              <Link to="../research-lines/medical-image"><li>Learn more...</li></Link>
            </ul>
          </div>
        </ResearchBlock>

        <div id='nlp' className={researchTitle}>
          <h2>Natural Language Processing</h2>
        </div> 
        <ResearchBlock>
          <StaticImage alt="Natural Language Processing" src='..\images\nlp.png' 
          objectFit='fill' className={researchImage}/>
          <div>
            <p>For Natural Language Processing (NLP) we focus in Question Answering for information 
               retrieval and entity extraction, Author Profiling for determining a social group of an 
               unknown author, and Source Code Analysis for automated testing of source code.
            </p>
            <ul>
              <Link to="../research-lines/nlp"><li>Learn more...</li></Link>
            </ul>
          </div>
        </ResearchBlock>

      </Layout>
    )
}

export default ResearchPage