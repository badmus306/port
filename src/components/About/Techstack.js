import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiPhp
} from "react-icons/di";
import {
  SiBlockchaindotcom,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <div>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlockchaindotcom />
      </Col>
    </Row>
    <h1 className="project-heading">
          Skills <strong className="purple">in Details </strong>
        </h1>
<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
<Col xs={4} md={2}>
 <strong className="purple"> LANGUAGES </strong> <br/>
  Php <br/>
  Html <br/>
  Css <br/>
  Javascript <br/>
  Typescript <br/>
  GraphQl <br/>
</Col>

<Col xs={4} md={2} >
<strong className="purple"> FRAMEWORK </strong> <br/>
  React <br/>
  Vue <br/>
  Laravel <br/>
  D3 <br/>
  Express <br/>
  Next <br/>
  Gatsby <br/>

</Col>
<Col xs={4} md={2}>
<strong className="purple"> DATABASE </strong> <br/>
  Sql <br/>
  Oracle <br/>
  MongoDb <br/>
  PostgreDB <br/>
  Firebase <br/>
</Col>
<Col xs={4} md={2} >
<strong className="purple"> TOOLS & PLATFORM </strong> <br/>
  Git & Github <br/>
  Wordpress <br/>
  Contentful <br/>
  Heroku <br/>
  Vercel <br/>
  Postman <br/>
</Col>
</Row>
</div>
  );
}

export default Techstack;
