import { createContext, useContext } from 'react';

let accountContext;

export const getAccountContext = config => {
  accountContext = accountContext || createContext(config);
  return accountContext;
};

export const useAccountContext = () => {
  const context = useContext(accountContext);
  if (!context) {
    throw new Error('useAccountContext must be used within a AccountContext');
  }

  return context;
};
