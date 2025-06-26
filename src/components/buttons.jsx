import buttons from "../buttons";

export const Buttons = () => {
  const handleClick = () => {};

  return (
    <div id="buttons">
      {Object.entries(buttons).map(([key, obj]) => (
        <button key={key} id={obj.id} onClick={handleClick}>
          {obj.name}
        </button>
      ))}
    </div>
  );
};
