import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log(name);
    console.log(lastname);
    console.log(email);
  }, [name, lastname, email]);

  const handleNameChange = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  const handleLastnameChange = (event) => {
    setLastname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <AppContext.Provider
      value={{
        name,
        lastname,
        email,
        handleNameChange,
        handleLastnameChange,
        handleEmailChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
