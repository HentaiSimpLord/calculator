import buttons from "../buttons";

export const Buttons = () => {
  return (
    <>
      {Object.entries(buttons).map(([btn, key]) => {
        <button>test</button>;
      })}
    </>
  );
};
