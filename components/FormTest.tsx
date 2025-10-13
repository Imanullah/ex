import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
  amount: number;
  paypalEmail: string;
}

export default function FormTest() {
  const { register, handleSubmit } = useForm<IFormInput>();

  const rates = {
    beli: 16500, // 1 USD = Rp 15,600 (user beli PayPal dari kita)
    jual: 15900, // 1 USD = Rp 14,900 (user jual PayPal ke kita)
  };

  const handleOnSubmit: SubmitHandler<IFormInput> = async (data) => {
    const i = data;
    console.log(i);
  };

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div>
      <div>Abeh Batree</div>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div>
          <label htmlFor="Name">Jumalh</label>
          <input type="number" placeholder="Jumlah nominal" {...register('amount')} className="bg-white border-gray-100" />
        </div>
        <div>
          <label htmlFor="Name">Alamat</label>
          <input type="email" placeholder="contoh@email.com" {...register('paypalEmail')} className="bg-white border-gray-100" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
