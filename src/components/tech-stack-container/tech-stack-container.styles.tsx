import styled from "styled-components";
import { motion } from "framer-motion";

export const BoxesContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(95px, 1fr));
  gap: 0.75rem;
  width: 100%;
`;
