import { FormEvent, useState } from 'react'
import { Box, Button, Image, Stack, Paragraph, Grid } from '@/shared'
import styled from 'styled-components'
import { socialIcons } from '@/data/socialIcons'
import { mqAbove } from '@/utils/mq'
import { validateEmail } from '@/utils/validate-email'

const FooterContainer = styled.div`
  background-color: var(--dark-blue-footer);
  margin-top: 10rem;
  padding-top: 16rem;
  position: relative;
  padding-inline: 1rem;
`

const AccessCard = styled(Stack)`
  width: 90%;
  padding: 2.6rem 2rem;
  border-radius: 0.5rem;
  background-color: var(--dark-blue-main);
  position: absolute;
  top: -20%;
  left: 50%;
  text-align: center;
  transform: translateX(-50%);
  box-shadow: 2px 2px 20px rgb(0, 0, 0, 0.4);
  max-width: var(--size-md);
  margin-inline: auto;

  ${mqAbove('md', () => {
    return `
      padding: 3rem 4rem;
    `
  })}
`

const AccessCardHeading = styled.h2`
  font-size: 1.2rem;

  ${mqAbove('md', () => {
    return `
      font-size: 1.6rem;
    `
  })}
`

const AccessForm = styled(Stack)`
  width: 100%;

  ${mqAbove('md', () => {
    return `
      flex-direction: row;
    `
  })}
`

const AccessMessage = styled.small`
  color: var(--red);
  font-size: 80%;
  font-weight: var(--fw-bold);
  align-self: flex-start;
  margin-left: 2rem;
`

const Input = styled.input`
  border: none;
  padding: 1rem 2rem;
  border-radius: 5rem;

  &:focus-visible {
    outline: 2px solid var(--blue);
    outline-offset: 2px;
  }

  ${mqAbove('md', () => {
    return `
      flex: 1;
    `
  })}
`

const AccessCardButton = styled(Button)`
  ${mqAbove('md', () => {
    return `
      width: fit-content;
    `
  })}
`

const FooterContent = styled.div`
  max-width: calc(var(--size-xl) - 10rem);
  margin-inline: auto;
  padding-bottom: 2.5rem;
`

const FooterMain = styled(Stack)`
  margin-top: 1.5rem;

  ${mqAbove('lg', () => {
    return `
      gap: 0;
      flex-direction: row;
      justify-content: space-between;

      & > div:first-child {
        flex-basis: 30%;
      }
    `
  })}
`

const GridNav = styled(Grid)`
  margin: 3.5rem 0;

  & > div:last-child {
    margin-top: 2.5rem;
  }

  ${mqAbove('lg', () => {
    return `
      margin: 0;
      gap: 1rem;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr;

      & > div:last-child {
        margin: 0;
      }
    `
  })}
`

const LinkSection = styled(Stack)`
  ${mqAbove('lg', () => {
    return `
      align-items: flex-end;
      gap: 1rem;
    `
  })}
`

const NavLink = styled.a`
  padding-right: 10px;
  transition: text-shadow 500ms ease-in-out;

  &:hover {
    text-shadow: 0 0 0.9px #fff, 0 0 0.9px #fff, 0 0 0.9px #fff;
  }
`

const LinkIcon = styled(Box)`
  padding: 0.4rem;
  outline: 1px solid;
  border-radius: 5rem;
  display: inline-flex;
  width: 1.7rem;
  height: 1.7rem;
  align-items: center;
  transition: outline 500ms ease-in-out;

  &:hover {
    outline-color: var(--cyan);
  }

  &:hover > img {
    filter: brightness(0) saturate(100%) invert(93%) sepia(36%) saturate(3546%)
      hue-rotate(150deg) brightness(94%) contrast(88%);
  }
`

const Attribution = styled(Stack)`
  a {
    display: inline-block;
  }

  ${mqAbove('lg', () => {
    return `
      align-items: flex-end;
    `
  })}
`

const AttributionLink = styled.a`
  transition: text-shadow 500ms ease-in-out;

  &:hover {
    text-shadow: 0 0 0.9px #fff, 0 0 0.9px #fff, 0 0 0.9px #fff;
  }
`

export const Footer = () => {
  const [email, setEmail] = useState('')
  const [showMessage, setShowMessage] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!validateEmail(email)) {
      setShowMessage(true)
      return
    }

    setShowMessage(false)
    setEmail('')
  }

  return (
    <FooterContainer as='footer'>
      <AccessCard column align='center' gap='1.2rem'>
        <AccessCardHeading>Get early access today</AccessCardHeading>
        <Paragraph>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </Paragraph>

        <AccessForm as='form' onSubmit={handleSubmit} column gap='1rem'>
          <Input
            type='text'
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            placeholder='email@example.com'
          />
          <AccessCardButton type='submit'>
            Get Started For Free
          </AccessCardButton>
        </AccessForm>

        {showMessage && (
          <AccessMessage>Please enter a valid email address</AccessMessage>
        )}
      </AccessCard>

      <FooterContent>
        <Image src='/static/images/logo.svg' alt='Fylo Logo' w='10rem' />

        <FooterMain column gap='1rem'>
          <Stack align='flex-start' gap='1.5rem'>
            <Image src='/static/images/icon-location.svg' alt='Location Icon' />
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Paragraph>
          </Stack>

          <Stack column gap='1rem'>
            <Stack align='center' gap='1.5rem'>
              <Image src='/static/images/icon-phone.svg' alt='Phone Icon' />
              <Paragraph>+1-543-123-4567</Paragraph>
            </Stack>

            <Stack align='center' gap='1.5rem'>
              <Image src='/static/images/icon-email.svg' alt='Email Icon' />
              <Paragraph>example@fylo.com</Paragraph>
            </Stack>
          </Stack>

          <GridNav>
            <Stack column gap='0.6rem'>
              {['About Us', 'Jobs', 'Press', 'Blog'].map(item => (
                <NavLink key={item} href='#' title={item}>
                  {item}
                </NavLink>
              ))}
            </Stack>

            <Stack column gap='0.6rem'>
              {['Contact Us', 'Terms', 'Privacy'].map(item => (
                <NavLink key={item} href='#' title={item}>
                  {item}
                </NavLink>
              ))}
            </Stack>
          </GridNav>

          <LinkSection column align='center' gap='1.5rem'>
            <Stack justify='center' align='flex-start' gap='1rem'>
              {socialIcons.map(({ name, icon }) => (
                <LinkIcon key={name} as='a' href='#' title={name}>
                  <Image src={icon} alt={name} w='14px' />
                </LinkIcon>
              ))}
            </Stack>

            <Attribution column align='center'>
              <Paragraph>
                Challenge by{' '}
                <AttributionLink
                  href='https://www.frontendmentor.io?ref=challenge'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Frontend Mentor
                </AttributionLink>
              </Paragraph>

              <Paragraph>
                Coded with 💙 by{' '}
                <AttributionLink
                  href='https://github.com/josemiguel02'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  @josemiguel02
                </AttributionLink>
              </Paragraph>
            </Attribution>
          </LinkSection>
        </FooterMain>
      </FooterContent>
    </FooterContainer>
  )
}
