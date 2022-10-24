import styled from 'styled-components'

interface StackProps {
  column?: boolean
  justify?: 'space-between' | 'center' | 'space-evenly'
  align?: 'flex-start' | 'center' | 'flex-end'
  flexWrap?: boolean
  gap?: string
  p?: string
}

export const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${({ column }) => column && 'column'};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-wrap: ${({ flexWrap }) => flexWrap && 'wrap'};
  gap: ${({ gap }) => gap};
  padding: ${({ p }) => p};
`
