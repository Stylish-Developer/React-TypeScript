import React, { FC, createContext, useEffect, useState } from "react";
import "./App.css";
import Person from "./components/Person";
import { HairColor } from "./components/Person";
import Typing from "./components/Typing";
import BProp from "./components/BProp";
import BProp2 from "./components/BProp2";
import BegAdvProp1 from "./components/BegAdvProp1";
import BegAdvProp2 from "./components/BegAdvProp2";
import BegAdvProp3 from "./components/BegAdvProp3";
import BegAdvProp4 from "./components/BegAdvProp4";
import EventProps from "./components/EventProps";
import StylesProps from "./components/StylesProps";
import PropsTypesTips from "./components/PropsTypesTips";
import StateHook from "./components/hooks/StateHook";
import ReducerHook from "./components/hooks/ReducerHook";
import RefHook from "./components/hooks/RefHook";
import ClsComponent from "./components/class/ClsComponent";

import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import List from "./components/generics/List";
import Restriction from "./components/Restriction";

//Bonus point
import toast from "react-hot-toast";
import Toast from "./components/templateliterals/Toast";
import Button from "./components/wrappingHtml/Button";
import Input from "./components/wrappingHtml/Input";
import ExtractCPropTyp from "./components/wrappingHtml/ExtractCPropTy";
import Text from "./components/Polymorphic/Text";

//to create a interface  for developerDetail object
export interface developerDetailInterface {
  name: string;
  age: number;
  job: string;
  country: string;
}

export const Context = createContext<developerDetailInterface | null>(null);

const App: FC = () => {
  const [currentStatus, setCurrentStatus] = useState<string>("loading");
  const [eventPropsState, setEventPropsState] = useState<string>("");
  const [bgColor, setBgColor] = useState<string>("");

  // --> this object for contextAPI example
  const developerDetail: developerDetailInterface = {
    name: "gowtham",
    age: 24,
    job: "developer",
    country: "india",
  };

  // --> this object for BProp example
  const devDetails = {
    name: "Gowtham",
    job: "Developer",
    location: "India",
  };

  // --> this array for BProp2 example
  const superHerosList = [
    {
      name: "Clark Kent ",
      heroName: "Superman 🦸‍♂️",
    },
    {
      name: " Bruce Wayne ",
      heroName: "Batman 🦇",
    },
    {
      name: "David Bruce Banner ",
      heroName: "Incredible Hulk",
    },
    {
      name: "Peter Parker ",
      heroName: "Spider-Man 🕷",
    },
    {
      name: "Tony Stark ",
      heroName: "Iron Man 🤖",
    },

    {
      name: " Steve Rogers ",
      heroName: "Captain America 🛡",
    },
    {
      name: " Logan Howlett ",
      heroName: "Wolverine ⚓",
    },
  ];

  // --> this example method for BegAdvProp1
  useEffect(() => {
    const clearTimeOut = setTimeout(() => {
      setCurrentStatus("success");
      setTimeout(() => {
        setCurrentStatus("error");
        setTimeout(() => {
          setCurrentStatus("welcome");
          setTimeout(() => {
            setCurrentStatus("");
          }, 6000);
          clearTOut();
        }, 5000);
      }, 3000);
    }, 2000);

    // clear TimeOut
    function clearTOut() {
      setTimeout(() => {
        clearTimeout(clearTimeOut);
      }, 7000);
    }
  }, []);

  // setTimeInterval for random background color change
  const randomColorChange = (): void => {
    const bgColors = `rgb( ${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)} )`;
    setBgColor(bgColors);
  };

  setInterval(() => {
    randomColorChange();
  }, 5000);

  const notify = () => toast.success("Welcome to my website!");

  return (
    <>
      <Context.Provider value={developerDetail}>
        <header>
          <h3>REACT-TYPESCRIPT</h3>
        </header>

        <main
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <p>Playground</p>
          <Person
            name="gowtham"
            job="Developer"
            location="Gobi"
            hairColor={HairColor.brown}
          />
          <Typing name="gowtham" unreadMessageCount={15} isLoggedIn={false} />
          <BProp devDetails={devDetails} />
          <BProp2 superHero={superHerosList} />
          <BegAdvProp1 status={currentStatus} />
          <BegAdvProp2>Hai i am children text</BegAdvProp2>
          <BegAdvProp3>
            <BegAdvProp2>
              Hai i am react node component with some text
            </BegAdvProp2>
          </BegAdvProp3>
          <BegAdvProp4 devDetails={devDetails} />
          <EventProps
            handleClick={() => alert("Welcome React-TS zone")}
            value={eventPropsState}
            handleChange={(e) => setEventPropsState(e.target.value)}
          >
            <p>{eventPropsState}</p>
          </EventProps>
          <StylesProps
            styles={{
              height: "100px",
              width: "600px",
              backgroundColor: bgColor,
            }}
          />
          <PropsTypesTips />
          <StateHook />
          <ReducerHook />
          <RefHook />
          <ClsComponent message="The count value is:" />
          <Private isLoggedIn={false} component={Profile} />
          <List
            items={["gowtham", "ajith kumar", "ak"]}
            onClick={(item) => console.log(item)}
          />
          <List items={[1, 2, 3, 4, 5]} onClick={(item) => console.log(item)} />
          {/* <Restriction value={2} isPositive isNegative isZero /> */}{" "}
          {/* initial state */}
          <Restriction value={2} isPositive /> {/*  ** rare use concept** */}
          <div>
            <button onClick={notify}>Open Secret </button>
            <Toast position="right-top" />
          </div>
          <Button variant="secondary" onClick={() => console.log("clicked")}>
            primary button
          </Button>
          <Input placeholder="wrapping html concept example" />
          <ExtractCPropTyp devDetails={devDetails} />
          {/* use as keyword for text component */}
          <Text size="sm" as="h1" color="green">
            heading
          </Text>
          <Text size="sm" as="p" color="green">
            paragraph
          </Text>
          <Text size="sm" as="label" htmlFor="nameField" color="green">
            label
          </Text>
        </main>
        <footer
          style={{
            height: "200px",
            width: "100%",
            backgroundColor: "#000000",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p style={{ color: "Azure" }}>gowtham@react-typescript learning</p>
        </footer>
      </Context.Provider>
    </>
  );
};

export default App;
