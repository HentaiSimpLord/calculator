export const Display = ({ value, calculation }) => {
  return (
    <>
      <div id="display-container">
        <div id="calculation">{calculation}</div>
        <div id="display">{value}</div>
      </div>
    </>
  );
};
