import React, { createContext, useContext, useState, useEffect } from "react";

const UserIdContext = createContext();

export const useUserIdContext = () => {
  return useContext(UserIdContext);
};

export const UserIdContextProvider = ({ children }) => {  

  const [userId, setUserId] = useState(0);

  const getUserId = (userId) => {
    setUserId(userId);
    console.log(userId);
  }

  return (
    <UserIdContext.Provider value={{ userId, getUserId }}>
      {children}
    </UserIdContext.Provider>
  );
};