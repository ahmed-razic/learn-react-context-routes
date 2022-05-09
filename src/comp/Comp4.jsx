import { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

function Comp4() {
  const { setData, myAppData, setMyAppData } = useContext(AppContext);
  const newItem = {
    id: 6,
    firstName: 'Ahmed-6',
    lastName: 'Razic-6',
    city: 'Zenica',
  };

  useEffect(() => {
    console.log(myAppData);
  }, [myAppData]);

  return (
    <div>
      <button
        onClick={function () {
          setMyAppData([...myAppData, newItem]);
        }}
      >
        Change
      </button>
      <hr />
    </div>
  );
}
export default Comp4;
