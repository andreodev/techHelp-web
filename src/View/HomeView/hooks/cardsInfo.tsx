import { PhoneCall, Presentation } from 'lucide-react';

interface Tcards {
  to: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const cardsInfo: Tcards[] = [
    {
      to: '/register',
      title: 'Cadastrar Novos Usuários',
      description: 'Cadastre Novos Funcionários.',
     icon: <PhoneCall className="w-6 h-6 text-blue-600" />,
    },
    {
      to: '/new-ticket',
      title: 'Abertura de Chamada',
      description: 'Abra chamadas.',
     icon: <PhoneCall className="w-6 h-6 text-blue-600" />,
    },
    {
      to: 'about',
      title: 'Conheça sobre nosso projeto',
      description: 'Sobre o projeto.',
      icon: <Presentation className='w-6 h-6 text-blue-600' />
    },
  ];  