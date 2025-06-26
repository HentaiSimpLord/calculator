import buttons from "../buttons";

export const Buttons = () => {
  return (
    <div id="buttons">
      {Object.entries(buttons).map(([key, obj]) => (
        <button key={key} id={obj.id}>
          {obj.name}
        </button>
      ))}
    </div>
  );
};
