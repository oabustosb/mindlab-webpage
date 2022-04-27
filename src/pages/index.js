import * as React from 'react'
import Layout from '../components/layout'
import Card from '../components/home-card'
import {Link} from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'
import {titleBlock, startBlock, startimg, 
  cardGrid, invitation, invitationimg} from '../css/index.module.css'


const HomePage = () => {
    return (
      <Layout pageTitle={"Home"}>

        <div className={titleBlock}>
          <h1>Welcome to MindLab!</h1> 
          <h2>Machine Learning and Quantum Computing Lab</h2>
        </div>

        <div className={startBlock}>
          <div>              
            <h3>Machine Learning for a Better World</h3>
            <p>MindLab UNAL research group has been a center of excellence for Machine Learning 
              research, teaching, theory, and practice since its founding in 2001. The research 
              in our group is very broad, and we are interested in all aspects of machine learning.</p>
          </div>
          <StaticImage alt="UNAL Logo" src="../images/logo-unal.png" 
          height={146} width={345} objectFit="fill" className={startimg}/>        
        </div>

        <div className={cardGrid}>
          <Link to='/research/#kernel'> 
            <Card cardTitle={"Hybrid Kernel Methods"}>
              <StaticImage alt="UNAL Logo" src="../images/kernelmethods.png" objectFit="fill"/>
            </Card>
          </Link>
          <Link to='/research/#quantum'> 
            <Card cardTitle={"Quantum Machine Learning"}>
              <StaticImage alt="UNAL Logo" src="../images/quantum.png" objectFit="fill"/>
            </Card>
          </Link>
        </div>

        <div className={cardGrid}>
          <Link to='/research/#multimodal'> 
            <Card cardTitle={"Multimodal Learning"}>
              <StaticImage alt="UNAL Logo" src="../images/multimodal.png" objectFit="fill"/>
            </Card>
          </Link>
          <Link to='/research/#medical'> 
            <Card cardTitle={"Medical Image Analysis"}>
              <StaticImage alt="UNAL Logo" src="../images/medical-images.png" objectFit="fill"/>
            </Card>
          </Link>
        </div>

        <div className={cardGrid}>
          <Link to='/research/#nlp'> 
            <Card cardTitle={"Natural Language Processing"}>
              <StaticImage alt="UNAL Logo" src="../images/nlp.png" objectFit="fill"/>
            </Card>
          </Link>
        </div>
        
        <div className={invitation}>
          <p>Want to know more?<br />Come and ride with us!</p>
          <StaticImage alt="Invitation" src="../images/invitation.png" 
          className={invitationimg} height={250}/>
        </div>
        
      </Layout>
    )
}

export default HomePage