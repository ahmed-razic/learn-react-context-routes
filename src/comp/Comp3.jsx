import { useContext } from 'react';
import AppContext from '../context/AppContext';

function Comp3() {
  const { myAppData, displayData } = useContext(AppContext);

  return (
    <>
      <h1>{myAppData[0].city}</h1>
      {displayData()}
    </>
  );
}
export default Comp3;
