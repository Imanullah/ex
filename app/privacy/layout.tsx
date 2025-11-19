import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <AppHeader />
      <main>{children}</main>
      <AppFooter />
    </div>
  );
}
