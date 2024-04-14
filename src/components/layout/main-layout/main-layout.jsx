import { Header } from '@/components/common';

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="h-screen overflow-hidden bg-slate-100 p-16 pb-0 selection:bg-emerald-500 selection:text-white dark:bg-gray-900">
        {children}
      </main>
    </div>
  );
};
