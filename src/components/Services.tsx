import { servicesList } from '@/data/servicesList'
import { Grid, Stack, Image, Paragraph } from '@/shared'
import styled from 'styled-components'
import { mqAbove } from '@/utils/mq'

const ServicesContainer = styled.section`
  background-color: var(--dark-blue-intro);
  transform: translateY(-350px);

  @media screen and (min-width: 502px) {
    transform: translateY(-300px);
  }

  ${mqAbove('md', () => {
    return `
      transform: translateY(-185px);
    `
  })}

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 200px;
    background: url('/static/images/bg-curvy-mobile.svg') no-repeat center;
    background-size: cover;
  }

  ${mqAbove('md', () => {
    return `
      &::before {
        background-image: url('/static/images/bg-curvy-desktop.svg');
        height: 450px;
      }
    `
  })}
`

const ServicesContent = styled.div`
  background-color: var(--dark-blue-main);
  padding-top: 20rem;

  @media screen and (min-width: 619px) {
    padding-top: 15rem;
  }

  ${mqAbove('md', () => {
    return `
      padding-top: 0;
    `
  })}
`

const GridServices = styled(Grid)`
  place-items: center;
  text-align: center;
  max-width: var(--size-md);
  margin-inline: auto;

  ${mqAbove('md', () => {
    return `
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 2rem;
    `
  })}
`
const ServiceIcon = styled(Image)`
  object-fit: contain;

  ${mqAbove('md', () => {
    return `
      width: 5rem;
      height: 5rem;
    `
  })}
`

const Heading = styled.h2`
  margin: 0.5rem 0;
  font-size: 1.2rem;
`

export const Services = () => {
  return (
    <ServicesContainer>
      <ServicesContent>
        <GridServices gap='4rem'>
          {servicesList.map(({ img, title, description }) => (
            <Stack key={title} column align='center' gap='1rem' p='1rem'>
              <ServiceIcon src={img} alt={title} size='3.75rem' />
              <div>
                <Heading>{title}</Heading>
                <Paragraph>{description}</Paragraph>
              </div>
            </Stack>
          ))}
        </GridServices>
      </ServicesContent>
    </ServicesContainer>
  )
}
