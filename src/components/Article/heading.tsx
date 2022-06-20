import type { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode & ReactNode[] | undefined
}
const H2:FC<Props> = ({ children }) => (
      <h2>{children}</h2>
);

export default H2