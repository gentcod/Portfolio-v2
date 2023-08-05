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

type FormData = {
   name: string;
   heading: string;
   message: string;
}

const defaultFormFields: FormData = {
   name: '',
   heading: '',
   message: '',
}

const ContactForm = () => {
   const [formData, setFormData] = useState(defaultFormFields);

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = e.target;
      setFormData({...formData, [name]: value});
   }

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      window.open(`mailto:drelanorgent@gmail.com?subject=${formData.heading}&body=Hello Oyefule, I'm ${formData.name}, ${formData.message}`)
   }

   return (
      <FormContainer onSubmit={handleSubmit}>
         <Heading>Contact me</Heading>
         <>
         <SubHeading>Let's discuss about your next project</SubHeading>
         {lables.map(data => 
         <InputContainer key={data.id}>
            <FormLabel>{data.label}</FormLabel>
            <FormInput name={data.label} onChange={handleInputChange}/>
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