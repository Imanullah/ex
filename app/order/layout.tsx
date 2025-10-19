import OrderHeader from '@/components/OrderHeader';
import OrderFooter from '@/components/OrderFooter';

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      {/* Header */}
      <OrderHeader />
      <main>{children}</main>
      <OrderFooter />
    </div>
  );
}
