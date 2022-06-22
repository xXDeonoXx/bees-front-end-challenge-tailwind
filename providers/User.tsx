import React, { useContext, useState } from 'react';

type User = { name: string };

interface UserContextData {
  user: User;
  setName: (name: string) => void;
}

const UserContext = React.createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [user, setUser] = useState({ name: 'No Name Defined' });

  const setName = (name: string) => {
    setUser({ ...user, name });
  };

  return (
    <UserContext.Provider value={{ user, setName }}>
      {props.children}
    </UserContext.Provider>
  );
};

function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within an UserProvider');
  }

  return context;
}

export { UserProvider, useUser };
