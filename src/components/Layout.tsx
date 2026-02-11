import { TopNav } from "./TopNav";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />
      <main className="flex-1 p-6 max-w-[1600px] mx-auto w-full">
        {children}
      </main>
    </div>
  );
}
