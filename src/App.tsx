import { Container } from './shared'
import {
  Footer,
  Header,
  Intro,
  Services,
  StayProductive,
  Testimonials
} from '@/components'

export default function App() {
  return (
    <>
      <Header />
      <Container>
        <Intro />
        <Services />
        <StayProductive />
        <Testimonials />
      </Container>
      <Footer />
    </>
  )
}
