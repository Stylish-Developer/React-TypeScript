import React, { useRef, useState, useEffect, ChangeEvent } from "react";

const RefHook = () => {
  const [inputText, setInputText] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null!); // here is the trick

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <h4>concept of writing useRef hook in typescript</h4>
      <label htmlFor="inputText">Input Field:</label>
      <input
        id="inputText"
        name="inputText"
        value={inputText}
        onChange={(
          e: ChangeEvent<HTMLInputElement> // onChange event trick
        ) => setInputText(e.target.value)}
        ref={inputRef}
      />
      <h3>Input Text: {inputText}</h3>
    </>
  );
};

export default RefHook;
