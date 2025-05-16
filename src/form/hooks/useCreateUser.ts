import axios from "axios";
import { useState } from "react";

interface userData {
  nameUser: string;
  email: string;
  dept: string;
  password: string;
}

export function useCreateUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const createUser = async (userData: userData) => {
    console.log("🔍 Dados recebidos em createUser:", userData);

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post('http://localhost:8080/techelp/api/user', userData);
      console.log("✅ Resposta da API:", response.data);
      setSuccess(true);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("❌ Erro do Axios:", error.response?.data);
        setError(error.response?.data.message || "Erro ao criar usuário");
      } else {
        console.error("❌ Erro desconhecido:", error);
        setError("Erro desconhecido");
      }
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { createUser, loading, error, success };
}
