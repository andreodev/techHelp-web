import Navbar from '../Navbar';

export default function Layout({ children, pageName }: { children: React.ReactNode, pageName: string }) {
  return (
    <div className="bg-white font-inter ">
      <Navbar pageName={pageName} />
      <main className="max-w-6xl mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  );
}
