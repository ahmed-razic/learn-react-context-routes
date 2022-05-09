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

  const setData = function (item) {
    setMyAppData([...myAppData, item]);
  };

  return (
    <AppContext.Provider
      value={{
        myAppData,
        setData,
        displayData,
        setMyAppData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
