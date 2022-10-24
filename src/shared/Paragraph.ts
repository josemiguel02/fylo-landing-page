import styled from 'styled-components'

interface ParagraphProps {
  m?: string
  fw?: string
  size?: string
  lineH?: string | number
}

export const Paragraph = styled.p<ParagraphProps>`
  margin: ${({ m }) => m};
  font-weight: ${({ fw }) => fw};
  font-size: ${({ size }) => size};
  line-height: ${({ lineH }) => lineH};
  filter: contrast(0.6);
`
