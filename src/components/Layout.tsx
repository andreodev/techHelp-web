export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" bg-blue-500 justify-items-center p-10 font-inter min-h-screen ">
        {children}
    </div>
  );
}
