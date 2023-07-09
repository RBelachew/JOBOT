import { createContext, useContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState(() => {
    const storedUserType = localStorage.getItem("userType");
    if (storedUserType) {
      return JSON.parse(storedUserType);
    }
    return {};
  });

  const updateUsertype = (newUserType) => {
    setUserType(newUserType);
    //update the user details in localStorage
    localStorage.setItem("userType", JSON.stringify(newUserType));
  };

  return (
    <UserContext.Provider value={{ userType, updateUsertype }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
