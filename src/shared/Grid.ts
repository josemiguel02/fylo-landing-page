import styled from 'styled-components'

interface GridProps {
  columns?: number
  rows?: number
  gap?: string
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ columns }) =>
    columns && `repeat(${columns}, minmax(0, 1fr))`};
  grid-template-rows: ${({ rows }) =>
    rows && `repeat(${rows}, minmax(0, 1fr))`};
  gap: ${({ gap }) => gap};
`
