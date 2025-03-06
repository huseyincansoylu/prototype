import { create } from "zustand"

interface StepState {
  currentStep: number
  totalSteps: number
  nextStep: () => void
  prevStep: () => void
  goToStep: (step: number) => void
  setTotalSteps: (total: number) => void
}

export const useStepStore = create<StepState>((set) => ({
  currentStep: 0,
  totalSteps: 3,
  nextStep: () =>
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, state.totalSteps - 1),
    })),
  prevStep: () =>
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, 0),
    })),
  goToStep: (step) =>
    set((state) => ({
      currentStep: Math.max(0, Math.min(step, state.totalSteps - 1)),
    })),
  setTotalSteps: (total) => set({ totalSteps: total }),
}))
