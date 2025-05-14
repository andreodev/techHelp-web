// components/Container.tsx
export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="w-full max-w-4xl p-10 bg-blue-500 rounded-xl shadow-lg flex flex-col items-center">
        {children}
      </div>
    </div>
  );
}
