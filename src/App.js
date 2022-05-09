import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Comp1 from './comp/Comp1';
import Comp3 from './comp/Comp3';
import Comp4 from './comp/Comp4';
import Home from './pages/Home';
import Header from './comp/Header';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import { AppProvider } from './context/AppContext';

function App() {
  const myName = 'Ahmed';
  const sayHi = function (word) {
    return <h1>Hello, {word}</h1>;
  };

  return (
    <>
      {/* <div className='container'>
        <Comp1 name={myName} city='Sarajevo' hi={sayHi} />
      </div>
      <hr /> */}

      <AppProvider>
        {/* <div className='container'>
          <Comp3 />
          <Comp4 />
        </div>
        <br /> */}
        <Router>
          <div className='container'>
            <Routes>
              <Route
                exact
                path='/'
                element={
                  <>
                    <Header />
                    <Home />
                  </>
                }
              />
              <Route path='/about' element={<About />} />
              <Route path='/contact/:id' element={<Contact />} />
              <Route path='/projects/*' element={<Projects />} />
            </Routes>
          </div>
        </Router>
      </AppProvider>
    </>
  );
}

export default App;
