import styled from 'styled-components';

export const Container = styled.div`
   width: 35rem;
   display: flex;
   flex-direction: column;
   row-gap: 1rem;
   color: white;
   padding: 1.5rem;
`

export const ExperienceNum = styled.h2`
   color: #acacac;
   font-size: 7rem;
   margin-left: 1rem;
`

export const ExperienceTitle = styled.h3`
   font-weight: 700;
   font-size: 1.4rem;
   height: 4rem;
`

export const ExperienceTitleCompanyName = styled.span`
   color: ${props => props.color};
`

export const ExperienceTitleRole = styled.span`
   font-size: 1.2rem;
   margin-left: .5rem;
`

export const ExperienceDesc = styled.p`
   font-size: 1.2rem;
   color: #d1d1d1;
   word-spacing: .3rem;
   line-height: 1.2;
`