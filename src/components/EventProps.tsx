import React, { ChangeEvent, MouseEvent, ReactNode } from "react";

interface Props {
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void; // event onClick as a props
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void; // event onChange as a props
  children: ReactNode;
}

const EventProps = (props: Props) => {
  /*  const handleCh = (e: ChangeEvent<HTMLInputElement>) :  void => {
    console.log(e.target.value);
  }
 */

  // console.log(props.children);

  return (
    <>
      <h5>Event props concept</h5>
      <p>ex: 1 for onClick event </p>
      <button type="button" onClick={props.handleClick}>
        show popup
      </button>
      <p>ex: 2 for onChange event </p>
      <input
        type="text"
        name="carName"
        value={props.value}
        onChange={props.handleChange}
      />
      <p>{props.children}</p>
    </>
  );
};

export default EventProps;
