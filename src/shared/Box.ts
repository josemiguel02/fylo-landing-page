import styled from 'styled-components'

interface BoxProps {
  bg?: string
  size?: string
  w?: string
  h?: string
  m?: string
  p?: string
}

export const Box = styled.div<BoxProps>`
  background-color: ${({ bg }) => bg};
  width: ${({ size, w }) => size ?? w};
  height: ${({ size, h }) => size ?? h};
  margin: ${({ m }) => m};
  padding: ${({ p }) => p};
`
