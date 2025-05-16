export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center  ">
      <div className="w-full max-w-5xl p-9  bg-blue-500 rounded-3xl shadow-lg flex flex-col items-center">
        {children}
      </div>
    </div>
  );
}
