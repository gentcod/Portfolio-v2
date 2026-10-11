import Heading from "../heading/heading.component";
import { 
   ContentsBlock, 
   ContentsContainer, 
   CardHeader,
   TerminalStatus,
   Description, 
   ProjectName, 
   ProjectsContainer, 
   BadgesSection,
   StackContainer, 
   StackHeading, 
   StackTag, 
   Tag, 
} from "./backend.style";

type Backend = {
   id: number;
   name: string;
   description: string;
   link: string;
   stack: string[];
   tags: string[];
   status?: string;
}[]

const data: Backend = [
   {
      id: 0,
      name: 'PHOTO COMPRESSOR',
      description: `Lightweight image compressor compiled to WebAssembly and deployed as a high-performance Chrome Extension. Optimizes imagery locally with zero server latency.`,
      link: 'https://chromewebstore.google.com/detail/ojlkefdlieblgnbeebpbhimlajobeldj?utm_source=item-share-cb',
      stack: ['Golang', 'WASM', 'JavaScript', 'Chrome Extension'],
      tags: ['WASM', 'Extension'],
      status: 'SHIPPED'
   },
   {
      id: 1,
      name: 'NLP-TO-SQL',
      description: `Backend engine enabling conversational database interactions, leveraging Retrieval-Augmented Generation (RAG) to translate natural language inquiries into optimized SQL queries.`,
      link: 'https://github.com/gentcod/nlp-to-sql',
      stack: ['Golang', 'PostgreSQL', 'MySQL', 'OpenAI', 'Gemini RAG'],
      tags: ['AI/RAG', 'Databases'],
      status: 'ACTIVE'
   },
   {
      id: 2,
      name: 'DO-NGINX',
      description: `Automated SaaS provisioning utility that bootstraps Nginx Reverse Proxy infrastructure on virtual machine instances with single-command orchestration.`,
      link: 'https://github.com/gentcod/do-nginx-app',
      stack: ['Golang', 'Bash', 'Docker', 'Linux', 'SSH Automation'],
      tags: ['Cloud', 'DevOps'],
      status: 'PRODUCTION'
   },
   {
      id: 3,
      name: 'ENVIRON',
      description: `Minimalist Go package for robust and safe environment configuration parsing, decryption, and runtime validation.`,
      link: 'https://pkg.go.dev/github.com/gentcod/environ',
      stack: ['Golang', 'Env Parser', 'Runtime Config'],
      tags: ['Go Package', 'Open Source'],
      status: 'PUBLISHED'
   },
]

const Projects = () => {
  return (
    <ProjectsContainer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Heading 
        eyebrow="SYSTEMS & INFRASTRUCTURE"
        title="Backend Architecture." 
      />
      <ContentsContainer>
         {data.map((el, index) => (
            <ContentsBlock 
               key={el.id} 
               href={el.link} 
               target="_blank"
               rel="noreferrer"
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, delay: index * 0.08 }}
            >
               <CardHeader>
                  <ProjectName>{el.name}</ProjectName>
                  <TerminalStatus>{el.status || 'ACTIVE'}</TerminalStatus>
               </CardHeader>
               <Description>{el.description}</Description>
               <BadgesSection>
                  <StackContainer>
                     <StackHeading>STACK:</StackHeading>
                     {el.stack.map((t, i) => (<StackTag key={i}>{t}</StackTag>))}
                  </StackContainer>
                  <StackContainer>
                     <StackHeading>TAGS:</StackHeading>
                     {el.tags.map((t, i) => (<Tag key={i}>{t}</Tag>))}
                  </StackContainer>
               </BadgesSection>
            </ContentsBlock>
         ))}
      </ContentsContainer>
    </ProjectsContainer>
  );
};

export default Projects;
