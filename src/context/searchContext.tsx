import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface iDataValueContext {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

type DataContextProviderProps = {
  children: React.ReactNode;
};

const initialState = {
  search: '',
  setSearch: () => {},
};

export const DataContext = createContext<iDataValueContext>(initialState);

export default function DataProvider({ children }: DataContextProviderProps) {
  const [search, setSearch] = useState('');

  return (
    <div>
      <DataContext.Provider value={{ search, setSearch }}>
        {children}
      </DataContext.Provider>
    </div>
  );
}
