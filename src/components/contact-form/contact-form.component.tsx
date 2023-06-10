import { FormContainer, FormInput, FormLabel, Heading, SubHeading, InputContainer, Button } from './contact-form.style';

type Labels = {
   id: number,
   label: string
}[]

const lables : Labels = [
   {
      id: 0,
      label: "Name"
   },
   {
      id: 1,
      label: "Message"
   }
]

const ContactForm = () => {
   return (
      <FormContainer>
         <Heading>Contact me</Heading>
         <>
         <SubHeading>Let's discuss about your next project</SubHeading>
         {lables.map(data => 
         <InputContainer key={data.id}>
            <FormLabel>{data.label}</FormLabel>
            <FormInput/>
         </InputContainer>
         )}
         <Button>Submit</Button>
         </>
      </FormContainer>
   )
}

export default ContactForm;