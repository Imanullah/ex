import OrderHeader from '@/components/OrderHeader';
import OrderFooter from '@/components/OrderFooter';

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <OrderHeader />
      <main>{children}</main>
      <OrderFooter />
    </div>
  );
}
