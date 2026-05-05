import styled from "styled-components";
import { motion } from "framer-motion";

export const BoxesContainer = styled(motion.div)`
   display: flex;
   flex-wrap: wrap;
   gap: 1.5rem;
   justify-content: flex-start;
   width: 100%;

   @media only screen and (max-width: 768px) {
      justify-content: center;
   }
`;
