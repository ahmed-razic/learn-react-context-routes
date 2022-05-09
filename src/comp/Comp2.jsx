function Comp2({ city, hi }) {
  return (
    <>
      <h1>This is Comp2</h1>
      <h3>My city is {city}</h3>
      {hi('World')}
    </>
  );
}
export default Comp2;
