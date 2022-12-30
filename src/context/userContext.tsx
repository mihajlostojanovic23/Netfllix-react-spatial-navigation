import { createContext, Dispatch, SetStateAction, useState } from 'react';

//Inteface
interface IUser {
  userId: any;
  setUserId: Dispatch<SetStateAction<any>>;
  userInfo: any;
  setUserInfo: Dispatch<SetStateAction<any>>;
}

type DataContextProviderProps = {
  children: React.ReactNode;
};

const initialState = {
  userId: 0,
  setUserId: () => {},
  userInfo: {},
  setUserInfo: () => {},
};

export const UserContext = createContext<IUser>(initialState);

export default function UserProvider({ children }: DataContextProviderProps) {
  const [userId, setUserId] = useState(0);
  const [userInfo, setUserInfo] = useState();

  return (
    <div>
      <UserContext.Provider
        value={{ userId, setUserId, userInfo, setUserInfo }}
      >
        {children}
      </UserContext.Provider>
    </div>
  );
}
