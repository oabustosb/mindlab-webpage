import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import {StaticImage} from 'gatsby-plugin-image'
import {titleBlock, mapBlock, interest,
        invitation, invitationimg} from '../css/contact.module.css'

const ContactPage = () => {
  return (
    <Layout pageTitle={"Contact"}>

      <div className={titleBlock}>
        <h1>Contact us</h1> 
      </div>

      <div className={mapBlock}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.705505176627!2d-74.08424201391728!3d4.636783281729366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bce0868b64f%3A0xb696cd67a04b98e9!2sFacultad%20de%20Ingenier%C3%ADa!5e0!3m2!1ses!2sco!4v1642651022742!5m2!1ses!2sco" 
          width="650" height="450" allowfullscreen="" loading="lazy">
        </iframe>
      </div>

      <hr/>

      <div className={interest}>
        <h3>Links of interest</h3>
        <ul>
          <li><a href="http://www.hermes.unal.edu.co/pages/Consultas/Grupo.jsf?idGrupo=830" target="_blank"><span>Sistema Hermes</span></a></li>
          <li><a href="https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000343838" target="_blank"><span>Scienti Colciencias</span></a></li>
          <li><a href="https://ingenieria.bogota.unal.edu.co/es/dependencias/departamentos/departamento-de-ingenieria-de-sistemas-e-industrial.html" target="_blank"><span>Systems and Computer Engineering Department</span></a></li>
        </ul>
      </div>

      <hr/>

      <div className={invitation}>
        <p>Want to know more?<br />Come and ride with us!</p>
        <StaticImage alt="Invitation" src="../images/invitation.png" 
        className={invitationimg} height={250}/>
      </div>

    </Layout>
  )
}

export default ContactPage