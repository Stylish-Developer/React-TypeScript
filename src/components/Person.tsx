import React, { FC, useState, ChangeEvent, useContext } from "react";
import { Context, developerDetailInterface } from "../App";

//ENUM

// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric.

export enum HairColor {
  black = " You  hair color is damn awesome man😘",
  brown = " cool hair color man🤗 ",
  pink = " Wow that is so cool 😮",
}

interface Props {
  name: string;
  job: string;
  location: string;
  hairColor: HairColor;
}

// Without FC - import
/* const Person = ({ name, job, location }: Props) => {
  // type 1 --> const Person = (props: Props) => { type 2 --> const Person = ({ name,job,location }: Props) 
  return (
    <div>
      <h5>Person Details</h5>
      <p>Name: {name}</p>
      <p>Job: {job}</p>
      <p>Location: {location}</p>
    </div>
  );
};
 */

// With FC - import
const Person: FC<Props> = ({ name, job, location, hairColor }) => {
  // type 1 --> const Person = (props: Props) => { type 2 --> const Person = ({ name,job,location }: Props) => interface doesn't work here because of FC
  // solution: delete  : Props inside () and put <Props> as a element after FC

  // useState in typeScript
  const [country, setCountry] = useState<string>("");

  const handleSubmit = (): void => {
    alert(`your country name ${country} is registered now.`);
    setCountry("");
  };

  // type concept

  type smartphoneName = "Iphone";

  //   const mobileBrand: smartphoneName = "samsung"  it will be thrown error to avoid this try union "Iphone | samsung"
  const mobileBrand: smartphoneName = "Iphone";

  const contextValue = useContext(Context) as developerDetailInterface;

  return (
    <div>
      <h5>component & props & interface Concept</h5>
      <h5>Person Details</h5>
      <p>Name: {name}</p>
      <p>Job: {job}</p>
      <p>Location: {location}</p>
      <h5>useState in typescript Concept</h5>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="countryName">Enter Your CountryName</label>
          <input
            type="text"
            id="countryName"
            name="country"
            placeholder="Write down here..."
            value={country}
            onChange={(
              e: ChangeEvent<HTMLInputElement> // so much events are there like changeEvent note that carefully gowtham
            ) => setCountry(e.target.value)}
            required
          />
          <button type="submit">submit</button>
        </form>
      </div>
      {/* <div>{hairColor.black}</div> */}
      <h5>Enum Concept</h5>
      <div>{hairColor}</div>
      <h5>type Concept</h5>
      <p>Mobile brand name is : 🍏{mobileBrand}</p>
      <div>
        <h5>context API concept</h5>
        <p>Name: {contextValue?.name}</p>
        <p>Age: {contextValue?.age}</p>
        <p>Job: {contextValue?.job}</p>
        <p>Location: {contextValue?.country}</p>
      </div>
    </div>
  );
};

export default Person;
