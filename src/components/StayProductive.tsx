import { Grid, Image, Paragraph } from '@/shared'
import { mqAbove } from '@/utils/mq'
import styled from 'styled-components'

const StayProductiveContainer = styled.section`
  padding-inline: 1rem;
`

const StayProductiveContent = styled(Grid)`
  margin-top: 5rem;
  place-items: center;
  max-width: calc(var(--size-xl) - 10rem);
  margin-inline: auto;

  ${mqAbove('md', () => {
    return `
      gap: 3rem;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr;
    `
  })}
`

const Heading = styled.h2`
  margin: 1rem 0;
  line-height: 1.2;
  font-size: 1.2rem;

  ${mqAbove('md', () => {
    return `
      font-size: 2.2rem;
    `
  })}

  @media screen and (min-width: 963px) {
    width: 80%;
  }
`

const ButtonLink = styled.a`
  color: var(--cyan);
  border-bottom: 1px solid var(--cyan);
  font-family: var(--font-secondary);
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 500ms ease-in-out;
  transition-property: color, border-color;

  &:hover {
    color: var(--white);
    border-color: var(--white);
  }

  &:hover img {
    filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(2%)
      hue-rotate(153deg) brightness(101%) contrast(101%);
  }
`

export const StayProductive = () => {
  return (
    <StayProductiveContainer>
      <StayProductiveContent gap='1.8rem'>
        <Image
          src='/static/images/illustration-stay-productive.png'
          alt='Stay Productive Image'
          loading='lazy'
        />

        <div>
          <Heading>Stay productive, wherever you are</Heading>
          <Paragraph>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </Paragraph>
          <Paragraph m='0.8rem 0'>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </Paragraph>

          <ButtonLink href='#'>
            See how Fylo works
            <span css='display: inline-flex'>
              <Image
                src='static/images/arrow-right-circle.svg'
                alt='Arrow Right Circle Icon'
                size='1.06rem'
              />
            </span>
          </ButtonLink>
        </div>
      </StayProductiveContent>
    </StayProductiveContainer>
  )
}
