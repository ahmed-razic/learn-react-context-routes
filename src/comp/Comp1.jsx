import Comp2 from './Comp2';
function Comp1({ name, city, hi }) {
  return (
    <>
      <h1>This is Comp1</h1>
      <h3>My name is {name}</h3>
      <Comp2 city={city} hi={hi} />
    </>
  );
}
export default Comp1;
