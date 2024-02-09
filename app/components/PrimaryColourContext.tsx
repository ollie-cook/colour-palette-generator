'use client'

import { createContext, useState, useContext } from 'react';

const usePrimaryColourState = () => {
  return useState<string>('');
}
export const PrimaryColourContext = createContext<ReturnType<typeof usePrimaryColourState> | null>(null);

export const usePrimaryColour = () => {
  const primaryColour = useContext(PrimaryColourContext)
  if (primaryColour === null) {
    throw new Error('usePrimaryColour must be used within a PrimaryColourProvider')
  }
  return primaryColour
}

const PrimaryColourProvider = ({ children }: { children: React.ReactNode }) => {
  const [primaryColour, setPrimaryColour] = usePrimaryColourState()

  return (
    <PrimaryColourContext.Provider value={[primaryColour, setPrimaryColour]}>
      {children}
    </PrimaryColourContext.Provider>
  )
}

export default PrimaryColourProvider;