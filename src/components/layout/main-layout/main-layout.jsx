import { Header } from '@/components/common';

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="h-screen overflow-hidden bg-slate-100 p-2 pb-0 pt-28 selection:bg-emerald-500 selection:text-white dark:bg-gray-900 lg:p-16 lg:pb-2">
        {children}
      </main>
    </div>
  );
};
