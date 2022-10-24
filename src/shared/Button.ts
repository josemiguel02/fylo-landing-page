import styled from 'styled-components'

interface ButtonProps {
  size?: string
}

export const Button = styled.button<ButtonProps>`
  border: none;
  outline: none;
  font-family: inherit;
  cursor: pointer;
  font-weight: var(--fw-bold);
  width: ${({ size }) => size ?? '100%'};
  padding: 1rem 2rem;
  border-radius: 5rem;
  color: var(--white);
  background-color: var(--blue);
  transition: all 500ms ease-in-out;
  transition-property: transform, background-color;

  &:hover {
    background-color: var(--cyan);
  }

  &:active {
    transform: scale(0.9);
  }
`
