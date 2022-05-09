import { createContext, useState } from 'react';
import { appData } from '../data/AppData';
const AppContext = createContext();

export const AppProvider = function ({ children }) {
  const [myAppData, setMyAppData] = useState(appData);

  const displayData = function () {
    return myAppData.map((item) => (
      <p key={item.id}>
        {item.firstName}, {item.lastName}, {item.city}
      </p>
    ));
  };

  setMyAppData([...myAppData, newItem]);

  return (
    <AppContext.Provider
      value={{
        myAppData,
        setMyAppData,
        displayData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
