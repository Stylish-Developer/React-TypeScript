import React from "react";

interface Props {
  superHero: {
    name: string;
    heroName: string;
  }[];
}
const BProp2 = (props: Props) => {
  return (
    <>
      <h4>Basic props - Array</h4>
      {props.superHero.map((x, index) => {
        return (
          <>
            <div
              key={x.heroName}
              style={{
                height: "50px",
                width: "300px",
                backgroundColor: "#FFFFFF",
                marginBottom: "10px",
                border: "2px solid navy",
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              <h5>
                BirthName:<span style={{ color: "navy" }}> {x.name} </span>
              </h5>
              <p>
                ComicName: <span style={{ color: "green" }}>{x.heroName} </span>
              </p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default BProp2;
