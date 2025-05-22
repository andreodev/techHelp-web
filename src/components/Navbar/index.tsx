import { Home } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ErrorModal from "../ErrorModal";
import UserProfile from "../UserProfile";

export default function Navbar({ pageName }: { pageName: string }) {
  const [erro, setErro] = useState(false);
  const location = useLocation();

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      setErro(true);
    }
  };

  return (
    <>
      <header className="bg-blue-600 text-white px-6 py-4 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" onClick={handleHomeClick}>
              <Home className="w-6 h-6 cursor-pointer" />
            </Link>
            <h1 className="text-xl font-bold">{pageName}</h1>
          </div>

          <UserProfile name="Leonardo" imageUrl="https://github.com/leonfritas.png" />
        </div>
      </header>

      {erro && (
        <ErrorModal
          isOpen={erro}
          message="Você já está na página inicial"
          onClose={() => setErro(false)}
        />
      )}
    </>
  );
}
