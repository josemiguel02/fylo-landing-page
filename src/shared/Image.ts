import styled from 'styled-components'

interface ImageProps {
  size?: string
  w?: string
  h?: string
}

export const Image = styled.img<ImageProps>`
  max-width: 100%;
  width: ${({ size, w }) => size ?? w};
  height: ${({ size, h }) => size ?? h};
  object-fit: cover;
`
