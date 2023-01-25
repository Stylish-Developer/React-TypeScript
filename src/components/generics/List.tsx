import React from "react";

type Props<T> = {
  items: T[];
  onClick: (value: T) => void;
};

const List = <T extends string | number>(props: Props<T>) => {
  return (
    <>
      <h4>This component explain generics concept in react typescript</h4>
      {/* but we already use generics type in previous workout */}
      {props.items.map((item, index) => {
        return (
          <>
            <div
              key={index}
              onClick={() => props.onClick(item)}
              style={{ cursor: "pointer" }}
            >
              {item}
            </div>
          </>
        );
      })}
    </>
  );
};

export default List;
