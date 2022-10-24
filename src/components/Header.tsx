import styled from 'styled-components'
import { Stack, Image } from '@/shared'
import { mqAbove } from '@/utils/mq'

const HeaderContainer = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  background-color: var(--dark-blue-intro);
  padding-inline: 1rem;
  z-index: 5;
`

const HeaderContent = styled(Stack)`
  width: inherit;
  padding: 1.5rem 0;
  max-width: var(--size-xl);
  margin-inline: auto;
`

const Logo = styled(Image)`
  transition: transform 500ms ease-in-out;

  &:active {
    transform: scale(0.9);
  }

  ${mqAbove('sm', () => {
    return `
      width: 6.5rem;
    `
  })}

  ${mqAbove('md', () => {
    return `
      width: 8rem;
    `
  })}
`

const NavList = styled(Stack)`
  margin: 0;
  padding: 0;
  list-style-type: none;

  ${mqAbove('md', () => {
    return `
      gap: 2rem;
    `
  })}
`

const NavLink = styled.a`
  font-weight: 100;
  filter: contrast(0.6);
  transition: all 500ms ease-in-out;
  transition-property: filter, text-decoration, text-shadow;

  &:hover {
    filter: contrast(1);
    text-decoration: underline;
    text-shadow: 0 0 0.9px #fff, 0 0 0.9px #fff, 0 0 0.9px #fff;
  }
`

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent justify='space-between' align='center' flexWrap>
        <a href='.' title='Home'>
          <Logo src='/static/images/logo.svg' alt='Fylo Logo' w='5rem' />
        </a>

        <nav>
          <NavList as='ul' gap='1.5rem'>
            {['Features', 'Team', 'Sign In'].map(item => (
              <li key={item}>
                <NavLink href='#' title={item}>
                  {item}
                </NavLink>
              </li>
            ))}
          </NavList>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  )
}
