import { redirect } from 'next/navigation';
import OrderBuy from '@/components/OrderBuy';
import OrderSell from '@/components/OrderSell';

export default async function OrderPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const test = await searchParams;
  console.log(test);

  const { type = '', page = '' } = await searchParams;

  console.log(page);

  if (type == 'buy') {
    return <OrderBuy />;
  } else if (type == 'sell') {
    return <OrderSell />;
  } else {
    // redirect('/');
  }
}
