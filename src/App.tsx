import Container from "./components/Container"
import Title from "./components/Title"
import FormRegister from "./form/FormRegister"
import Layout from "./View/RegisterView/Layout"

function App() {
  return (
    <Layout>
    <Container>
      <Title text="TechHelp" />
      <FormRegister />
    </Container>
    </Layout>
  )
}

export default App
