import { create } from 'zustand';

interface CalculatorState {
  amount: number;
  paypalEmail: string;
  paymentMethod: string;
}

interface CalculatorAction {
  setCount: (val?: number) => void;
  setEmail: (val?: string) => void;
  setPayment: (val?: string) => void;
}

const initialState: CalculatorState = {
  amount: 1,
  paypalEmail: '',
  paymentMethod: '',
};

export const useCalculatorStore = create<CalculatorState & CalculatorAction>((set) => ({
  ...initialState,

  setCount: (val) => set(() => ({ amount: val })),

  setEmail: (val) => set(() => ({ paypalEmail: val })),

  setPayment: (val) => set(() => ({ paymentMethod: val })),
}));
