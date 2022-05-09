import { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

function Comp4() {
  const { setMyAppData, myAppData } = useContext(AppContext);
  const newItem = {
    id: 6,
    firstName: 'Ahmed-6',
    lastName: 'Razic-6',
    city: 'Zenica',
  };

  console.log(myAppData);
  return <div>Comp4</div>;
}
export default Comp4;
