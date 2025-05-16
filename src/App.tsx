import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import RegisterView from "./View/RegisterView";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/techelp/api/user');
        const data = await response.json();
        setData(data); // Armazena os dados no estado
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData(); 
  }, []); 

  if (!data) {
    return <div>Carregando...</div>;
  }

  return (
    <Layout>
      <RegisterView />
    </Layout>
  );
}

export default App;
