export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" bg-[#e4e4e4] font-inter min-h-screen">
        {children}
    </div>
  );
}
