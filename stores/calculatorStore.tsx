import { create } from 'zustand';

interface CalculatorState {
  amount: number;
  paypalEmail: string;
  paymentMethod: string;
}

interface CalculatorAction {
  setAmount: (val?: number) => void;
  setPaypalEmail: (val?: string) => void;
  setPaymentMethod: (val?: string) => void;
}

const initialState: CalculatorState = {
  amount: 1,
  paypalEmail: '',
  paymentMethod: '',
};

export const useCalculatorStore = create<CalculatorState & CalculatorAction>((set) => ({
  ...initialState,

  setAmount: (val) => set(() => ({ amount: val })),

  setPaypalEmail: (val) => set(() => ({ paypalEmail: val })),

  setPaymentMethod: (val) => set(() => ({ paymentMethod: val })),
}));
