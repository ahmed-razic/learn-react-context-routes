import { Link, NavLink } from 'react-router-dom';
function Home() {
  return (
    <>
      <div className='container'>Home</div>
      <Link to='/contact/:10'>Contact</Link>
      <br />
      <Link to='/contact/:20'>Contact</Link>
      <br />
      <Link to='/projects'>Projects</Link>
      <br />
      <NavLink to='/about' className='link'>
        About
      </NavLink>
    </>
  );
}
export default Home;
