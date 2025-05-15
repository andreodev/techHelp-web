export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center  ">
      <div className="w-full max-w-4xl p-14 bg-blue-500 rounded-3xl shadow-lg flex flex-col items-center">
        {children}
      </div>
    </div>
  );
}
