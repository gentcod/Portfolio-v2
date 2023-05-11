import NeomorphBlock from '../neomorph-block/neomorph-block.component';
import TechStack from '../tech-stack/tech-stack.component';

import { BoxesContainer } from './tech-stack-container.styles';

const stackData = [
   {
      id: 0,
      text: "Javascript",
      bgColor: "#f2f807",
      textColor: "#222",
   },

   {
      id: 1,
      text: "NodeJS",
      bgColor: "#3c873a",
      textColor: "#222",
   },
   {
      id: 2,
      text: "Sass",
      bgColor: "#cd6799",
      textColor: "#fff",
   },
   {
      id: 3,
      text: "React",
      bgColor: "#f2f807",
      textColor: "#222",
   },

   {
      id: 4,
      text: "C#",
      bgColor: "#3c873a",
      textColor: "#222",
   },
   {
      id: 5,
      text: "Python",
      bgColor: "#cd6799",
      textColor: "#fff",
   },
   {
      id: 6,
      text: "SQL",
      bgColor: "#cd6799",
      textColor: "#fff",
   },
   {
      id: 7,
      text: "Express",
      bgColor: "#cd6799",
      textColor: "#fff",
   },
   {
      id: 8,
      text: "Git",
      bgColor: "#cd6799",
      textColor: "#fff",
   },
   {
      id: 9,
      text: ".Net",
      bgColor: "#cd6799",
      textColor: "#fff",
   },
   {
      id: 10,
      text: "MongoDB",
      bgColor: "#cd6799",
      textColor: "#fff",
   },
   {
      id: 11,
      text: "Azure DevOps",
      bgColor: "#cd6799",
      textColor: "#fff",
   },
   {
      id: 12,
      text: "PowerBI",
      bgColor: "#cd6799",
      textColor: "#fff",
   }
]

const TechStackContainer = () => {
   return (
      <BoxesContainer>
         {/* <TechStack/> */}
         <NeomorphBlock />

         {stackData.map(data => {
            // const width = Math.round(Math.random() * 8) + 5;
            const height = Math.round(Math.random() * 8) + 5;
            return <TechStack key={data.id} text={data.text} bgColor={data.bgColor} color={data.textColor} height={height} />
         }
         )}
            </BoxesContainer>
   )
}

export default TechStackContainer;