import Comp1 from './comp/Comp1';
import Comp3 from './comp/Comp3';
import Comp4 from './comp/Comp4';
import { AppProvider } from './context/AppContext';

function App() {
  const myName = 'Ahmed';
  const sayHi = function (word) {
    return <h1>Hello, {word}</h1>;
  };

  return (
    <>
      <div className='container'>
        <Comp1 name={myName} city='Sarajevo' hi={sayHi} />
      </div>
      <hr />
      <AppProvider>
        <div className='container'>
          <Comp3 />
          <Comp4 />
        </div>
      </AppProvider>
    </>
  );
}

export default App;
