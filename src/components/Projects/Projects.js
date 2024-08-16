import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.jpg";
import emotion from "../../Assets/Projects/emotion.jpg";
import editor from "../../Assets/Projects/codeEditor.jpg";
import chatify from "../../Assets/Projects/chatify.jpg";
import suicide from "../../Assets/Projects/suicide.jpg";
import bitsOfCode from "../../Assets/Projects/blog.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="SocialPulse"
              description="Developed SocialPulse, a social media platform utilizing ReactJS, NextJS, and TailwindCSS for a responsive and modern user interface. Integrated Appwrite for secure authentication and user login, ensuring a seamless user experience. The platform supports user-generated content and interactive social networking features."
              ghLink="https://github.com/punisher1k99/SocialPulsev2"
              demoLink="https://socialpulsev3.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="BizQuantum"
              description="At BizQuantum, I built a platform dedicated to making knowledge accessible to everyone. Our free online courses empower learners with essential skills in business analytics, catering to budding entrepreneurs, marketing enthusiasts, and IT professionals. The curated content covers vital areas in business analytics, ensuring learners gain practical, industry-relevant knowledge"
              ghLink="https://github.com/punisher1k99/BizQuantum"
              demoLink="https://biz-quantum.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="NF Infratech"
              description="I developed a professional website for NF Infratech, a company specializing in urban infrastructure projects. The site, built with modern web technologies, showcases the company's portfolio, services, and expertise. It features a clean, user-friendly design, optimized for performance and accessibility, ensuring a seamless experience for visitors and potential clients."
              ghLink="https://github.com/punisher1k99/NF-Infratech-T1"
              demoLink="https://nf-infratech-t1.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Visualter"
              description="
I created Visualter, a website designed to provide an immersive visual experience. The platform showcases visually rich content with a clean, minimalist design and smooth navigation. It is optimized for performance and responsiveness, offering users an engaging interface to explore stunning visuals, making it ideal for creative and artistic presentations."
              ghLink="https://github.com/punisher1k99/VisuAlter-DevHub"
              demoLink="https://visualter.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Vidlyy"
              description="
I developed Vidlyy, a YouTube client application, using modern web technologies. The platform allows users to search and stream videos seamlessly through the YouTube API. With a sleek, intuitive interface and responsive design, Vidlyy enhances the user experience by providing fast video access and efficient navigation across devices."
              ghLink="https://github.com/punisher1k99/Vidlyy"
              demoLink="https://vidlyy.netlify.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Haven Furniture"
              description="
I designed and developed Haven Furniture's website, an elegant platform that showcases high-quality furniture collections. The site features a visually appealing layout, smooth navigation, and responsive design, enhancing user experience across devices. It effectively highlights the brand's craftsmanship and products, providing potential customers with a seamless browsing and shopping experience."
              ghLink="https://github.com/punisher1k99/havenfurniture"
              demoLink="https://havenfurniture.vercel.app/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
