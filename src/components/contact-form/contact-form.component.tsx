import { useState } from 'react';
import { FormContainer, FormInput, FormLabel, Heading, SubHeading, InputContainer, Button, FormMessage } from './contact-form.style';

type Labels = {
   id: number,
   label: string
}[]

const lables : Labels = [
   {
      id: 0,
      label: "name"
   },
   {
      id: 1,
      label: "heading"
   }
]

type FormFields = {
   name: string;
   heading: string;
   message: string;
}

// const defaultFormFields: FormFields = {
//    name: '',
//    heading: '',
//    message: '',
// }

const ContactForm = () => {
   // const [formFields, setFormFields] = useState(defaultFormFields);

   // const handleSubmit = (e: React.FormEvent<HTMLInputElement>): void => {
   //    e.preventDefault();
   //    const target = e.target as typeof e.target & {
   //       name: {value: string};
   //       heading: {value: string};
   //       message: {value: string};
   //    };
      
   //    const name = target.name.value;
   //    const heading = target.heading.value;
   //    const message = target.message.value;

      
   // }

   return (
      <FormContainer>
         <Heading>Contact me</Heading>
         <>
         <SubHeading>Let's discuss about your next project</SubHeading>
         {lables.map(data => 
         <InputContainer key={data.id}>
            <FormLabel>{data.label}</FormLabel>
            <FormInput name={data.label}/>
         </InputContainer>
         )}
         <InputContainer>
            <FormLabel>Message</FormLabel>
            <FormMessage name='message'/>
         </InputContainer>
         <Button>Submit</Button>
         </>
      </FormContainer>
   )
}

export default ContactForm;