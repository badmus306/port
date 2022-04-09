import React from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import quiz from "../../Assets/Projects/quiz.png";
import barcode from "../../Assets/Projects/barcode.png";
import recipe from "../../Assets/Projects/recipe.png";
import resort from "../../Assets/Projects/resort.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Below are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          <Badge bg="primary"> React </Badge> <Badge bg="primary"> Html </Badge>
            <ProjectCard
              imgPath={barcode}
              isBlog={false}
              title="Barcode Generator"
              description="Barcode generator is a minimal project developed using PHP, PHPQRCODE,BOOTSTRAP and MYSQL. This project can be used in companies, warehouse, organization to generate scannable qr-code at real time which UI friendly and easy to use."
              link="https://marydesign.000webhostapp.com/"
            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resort}
              isBlog={false}
              title="Resort Management System"
              description="A resort management system which include some functionalities like booking a resort, view list of resort and a dashboard system where you can manage all the website settings and activities. A mobile friendly web-app built using PHP, BOOTSTRAP and MYSQL."
              link="https://badmusquiz.000webhostapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipe}
              isBlog={false}
              title="Hawala Recipe"
              description="A minimal recipe website application developed using REACT. Implemented with axios to fetch food recipes from an API. Keywords: REACT, ASYNC-AWAIT, BOOTSTRAP, AXIOS and API."
              link="https://react-quiz-1bac14tbi-badmus306.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz"
              description="A Quiz application developed using TYPESCRIPT, REACT, STYLED-COMPONENTS. A minimalistic application fetching quiz data from an external API. Easy to use application, with beautiful interface that is mobile responsive."
              link="https://myquiz-kappa.vercel.app/"
            />
          </Col>



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
