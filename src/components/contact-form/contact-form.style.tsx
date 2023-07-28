import styled from 'styled-components';

export const FormContainer = styled.form`
   width: 60%;
   height: auto;
   display: flex;
   flex-direction: column;
   row-gap: 2rem;
   justify-contents: center;
   margin: 0 auto;
   margin-top: 8rem;

   background-color: rgba(34,34,34, .2);
   backdrop-filter: blur(5px);
   padding: 3rem 5rem;
   border: 1px solid white;
   border-radius: 1rem;

   transition: all .8s ease;
`

export const InputContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   margin: 0 auto;
`

export const FormLabel = styled.label`
   text-align: left;
   margin: 1rem;
   color: white;
   font-size: 1rem;
`

export const FormInput = styled.input`
   max-width: 100%;
   height: 4rem;
   color: white;
   border-radius: 1rem;
   border: none;
   background-color: rgba(225,225,225, .3);
   outline: none;
   padding: 1rem;
   transition: all .8s ease;

   &:focus {
      border-bottom: 3px solid #45a25a;
      box-shadow: 0 .5rem 1rem rgba(255, 255, 255, .8)
   }
`

export const FormMessage = styled.textarea`
   max-width: 100%;
   max-height: 8rem;
   color: white;
   border-radius: 1rem;
   border: none;
   background-color: rgba(225,225,225, .3);
   outline: none;
   padding: 1rem;
   transition: all .8s ease;

   &:focus {
      border-bottom: 3px solid #45a25a;
      box-shadow: 0 .5rem 1rem rgba(255, 255, 255, .8)
   }
`;

export const Heading = styled.p`
   font-size: 4rem;
   color: white;
   font-weight: 1000;
   text-align: left;
   margin-top: 3rem;
`

export const SubHeading = styled(Heading)`
   font-size: 1.8rem;
   // margin-bottom: 2rem;
`

export const Button = styled.button`
   width: 80%;
   border-radius: 2rem;
   background-color: white;
   margin: 0 auto;
   color: #45a25a;
   padding: 1.5rem 3rem;
   border: none;
   font-size: 1.2rem;
   font-weight: 700;
   transition: all .8s ease;
   margin-top: 2rem;
   backface-visibility: hidden;

   cursor: pointer;

   &:hover {
      transform: scale(1.05);
      background-color: #45a25a;
      color: white;
   }

   &:active {
      transform: scale(1) translateY(1rem);
   }
`