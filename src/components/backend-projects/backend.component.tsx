import { useState } from "react";
import Heading from "../heading/heading.component";
import { ContentsBlock, ContentsContainer, Description, ProjectName, ProjectsContainer, StackContainer, StackHeading, StackTag, Tag, TagsContainer, TagsHeading } from "./backend.style";

type Backend = {
   id: number;
   name: string;
   description: string;
   link: string;
   stack: string[];
   tags: string[];
   imgSrc: string;
}[]

const data: Backend = [
   {
      id: 0,
      name: 'NLP-TO-SQL',
      description: `A backend application that enables conversational database interactions, 
      leveraging Retrieval-Augmented Generation (RAG) to generate context-aware, tailored responses. 
      It converts NLP to SQL queries. 
      It takes a textual request and returns a textual response based on the queried data.`,
      link: 'https://github.com/gentcod/nlp-to-sql',
      stack: ['Golang','SQL','MYSQL','POSTGRES','OpenAI','Gemini'],
      tags: ['Artificial Intelligence','SQL', 'Database', 'Natural Language Processing'],
      imgSrc: '',
   },
   {
      id: 1,
      name: 'DO-NGINX',
      description: `A SaaS project that is to be run once to help initialize an Nginx Proxied Web Server on
      your virtual machine. It solves the hassle of having to run commands when spinning off a server on
      a virtual machine`,
      link: 'https://github.com/gentcod/do-nginx-app',
      stack: ['Golang','Bash','CI','Docker','Linux','SSH'],
      tags: ['Server','Cloud','Virtual Machine'],
      imgSrc: '',
   },
   {
      id: 2,
      name: 'ENVIRON',
      description: `This is a simple Go package that helps you load environment configurations from your .env file`,
      link: 'https://pkg.go.dev/github.com/gentcod/environ',
      stack: ['Golang','ENV.'],
      tags: ['Environments','Secrets','ENV.'],
      imgSrc: '',
   },
]

const Projects = () => {
  const [inview, setInView] = useState(false);

  const handlerInView = () => {
    setInView(true);
  };

  return (
    <ProjectsContainer onScroll={() => handlerInView()} inview={inview}>
      <Heading title="Projects" />
      <ContentsContainer>
         {data.map(el => (
            <ContentsBlock key={el.id} to={el.link}>
               <ProjectName>{el.name}</ProjectName>
               <Description>{el.description}</Description>
               <StackContainer>
                  <StackHeading>STACK:</StackHeading>
                  {el.stack.map((t,i) => (<StackTag key={i}>{t}</StackTag>))}
               </StackContainer>
               <TagsContainer>
                  <TagsHeading>TAGS:</TagsHeading>
                  {el.tags.map((t,i) => (<Tag key={i}>{t}</Tag>))}
               </TagsContainer>
            </ContentsBlock>
         ))}
      </ContentsContainer>
    </ProjectsContainer>
  );
};

export default Projects;
