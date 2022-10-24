import { Box, Stack, Image, Button, Paragraph } from '@/shared'
import { mqAbove } from '@/utils/mq'
import styled from 'styled-components'

const IntroContainer = styled(Stack)`
  max-width: var(--size-md);
  margin-inline: auto;
  position: relative;
  z-index: 2;
`

const IntroContent = styled(Box)`
  text-align: center;
`

const IntroHeading = styled.h1`
  margin-top: 1rem;
  font-size: 1.5rem;
  line-height: 1.2;

  ${mqAbove('sm', () => {
    return `
      font-size: 2rem;
    `
  })}

  ${mqAbove('md', () => {
    return `
      font-size: 2.5rem;
    `
  })}
`

const IntroParagraph = styled(Paragraph)`
  max-width: 26rem;
  margin-inline: auto;
`

export const Intro = () => {
  return (
    <Box as='section' bg='var(--dark-blue-intro)' p='0 1rem'>
      <IntroContainer column align='center' gap='1rem'>
        <Image
          loading='lazy'
          alt='Illustration Image'
          src='/static/images/illustration-intro.png'
        />

        <IntroContent>
          <IntroHeading>
            All your files in one secure location, accessible anywhere.
          </IntroHeading>
          <IntroParagraph m='1.2rem 0'>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </IntroParagraph>
          <Button type='button' size='15rem'>
            Get Started
          </Button>
        </IntroContent>
      </IntroContainer>
    </Box>
  )
}
