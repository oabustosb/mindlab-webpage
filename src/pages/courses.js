import * as React from 'react'
import Layout from '../components/layout'
import {titleBlock, coursesBody, coursesList, separator} from '../css/courses-events.module.css'

const CoursesPage = () => {
    return (
      <Layout pageTitle={"Courses"}>

        <div className={titleBlock}>
          <h1>Courses</h1>
        </div>

        <div className={coursesBody}>

          <div className={coursesList}>
            <div>Undergraduate Courses</div>
            <ul>
              <a href="https://fagonzalezo.github.io/iis-2022-1/"><li>Introducción a los Sistemas Inteligentes (2022-I)</li></a>
              <a href="https://sites.google.com/a/unal.edu.co/prog-comp-2019-2/"><li>Programación de Computadores (2019-II)</li></a>
              <a href="https://sites.google.com/a/unal.edu.co/algoritmos-2017-1/"><li>Algoritmos (2017-I)</li></a>
            </ul>

            <hr/>

            <div>Graduate Courses</div>
            <ul>
              <a href="https://fagonzalezo.github.io/ml-2022-1/"><li>Machine Learning (2022-I)</li></a>
              <a href="https://fagonzalezo.github.io/qcp-2021-2/"><li>Quantum Computer Programming (2021-II)</li></a>
            </ul>

          </div>

          <div className={separator} />

          <div className={coursesList}>
            
            <div>Lifelong Learning (UEC)<br/>Faculty of Engineering</div>
            <ul>
              <a href="https://ingenieria.unal.edu.co/uecp/component/sppagebuilder/?view=page&id=3"><li>Introducción a la Programación con Python</li></a>
              <a href="https://ingenieria.unal.edu.co/uecp/component/sppagebuilder/?view=page&id=109"><li>Machine Learning and Data Science</li></a>
              <a href="https://ingenieria.unal.edu.co/uecp/component/sppagebuilder/?view=page&id=110"><li>Machine Learning and Data Science Avanzado</li></a>
            </ul>             
          </div>

        </div>

      </Layout>
    )
}

export default CoursesPage