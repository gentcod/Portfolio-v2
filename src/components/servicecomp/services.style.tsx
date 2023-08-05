import styled from "styled-components";

export const Container = styled.div`
   padding: 3rem 5rem;
   display: flex;
   flex-direction: column;
`;

export const ServicesContainer = styled.div`
   padding: 3rem 5rem;
   display: flex;
   justify-content: center;
   align-items: center;

   column-gap: 3rem;
`;

export const Service = styled.div`
   height: 25rem;
   width: 35rem;
   margin: auto 0;
   padding: 1.5rem 3rem;
   border: 2px solid #0d1e11;
   border-radius: 1rem;
   box-shadow: .6rem .6rem 1rem rgba(0,0,0, .4);
   cursor: pointer;
   transition: all .8s ease;

   display: flex;
   flex-direction: column;
   justify-content: center;

   &:hover {
      transform: scale(1.08) translateY(-1rem);
   }
`;

export const ServiceHeader = styled.h3`
   padding: 1rem;
   text-transform: uppercase;
   margin-bottom: 1.5rem;
   font-size: 1.6rem;
`;

export const ServiceContent = styled.p`
   font-size: 1.3rem;
`;

export const ServiceGreen = styled(Service)`
   background-color: #0d1e11;

   color: white;
`;