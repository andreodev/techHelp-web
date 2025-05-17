import { useState } from "react";
import Layout from "./components/Layout";
import Modal from "./components/Modal";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  console.log("🚀 ~ App ~ open:", open)
  return (
    <Layout>
      <h2>Clique no botão pra abrir o modal</h2>
      <button onClick={() => setOpen(!open)} className="cursor-pointer">Clique aqui</button>

      <Modal isOpen={open} setOpen={setOpen} description="description" title="Titulo" />
    </Layout>
  );
}

export default App;
