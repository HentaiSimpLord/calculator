export const Display = ({ value, calculation }) => {
  return (
    <div className="container">
      <div id="calculation">{calculation}</div>
      <div id="display">{value}</div>
    </div>
  );
};
