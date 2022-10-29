import { testimonialsList } from '@/data/testimonialsList'
import { Box, Grid, Image, Paragraph, Stack } from '@/shared'
import { mqAbove } from '@/utils/mq'
import styled from 'styled-components'

const TestimonialsContainer = styled.section`
  padding-inline: 1rem;
  margin: 12rem 0;
`

const GridTestimonials = styled(Grid)`
  place-items: center;
  max-width: calc(var(--size-xl) - 10rem);
  margin-inline: auto;

  ${mqAbove('md', () => {
    return `
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr;
    `
  })}
`

const TestimonialItem = styled(Stack)`
  padding: 1.5rem;
  border-radius: 0.4rem;
  background-color: var(--dark-blue-testimonials);
  box-shadow: 0 0 30px rgb(0, 0, 0, 0.2);
  position: relative;
  font-size: var(--fs-small);
  min-height: 200px;

  &:first-child::after {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    top: -20px;
    left: 10px;
    z-index: -1;
    background: url('/static/images/bg-quotes.png') no-repeat center;
    background-size: contain;
  }

  ${mqAbove('md', () => {
    return `
      gap: 1.5rem;
      padding: 2rem;
      font-size: var(--fs-normal);

      &:first-child::after {
        width: 3.5rem;
        height: 3.5rem;
        top: -40px;
        left: -8px;
      }
    `
  })}
`

const Avatar = styled(Image)`
  border-radius: 3rem;
`

export const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <GridTestimonials gap='2rem'>
        {testimonialsList.map(({ avatar, name }) => (
          <TestimonialItem key={name} column justify='center' gap='1rem'>
            <Paragraph>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </Paragraph>

            <Stack align='center' gap='1rem'>
              <Avatar src={avatar} alt={name} size='2.5rem' loading='lazy' />
              <Box>
                <Paragraph fw='var(--fw-bold)'>{name}</Paragraph>
                <small css='font-size: 80%; filter: contrast(0.6);'>
                  Founder & CEO, Huddle
                </small>
              </Box>
            </Stack>
          </TestimonialItem>
        ))}
      </GridTestimonials>
    </TestimonialsContainer>
  )
}
