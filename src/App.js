import "./App.css";
import { useState } from "react";

//Data

// components
import InputBar from "./components/InputBar";
import { SubmitBtn, HintBtn } from "./components/SubmitBtn";

// styles
import { Title, Discription } from "./StylesFolder/Styles";

function App() {
  const [playerInput, setPlayerInput] = useState(null);
  // const [answred, setAnswred] = useState(null);
  const [displayMessage, setDisplaymessage] = useState("");

  // const DisplayMessgae = () => {
  //   return displayMessage;
  // };

  return (
    <div>
      <div>
        <Title>Guess The Number</Title>
        <Discription>
          you have to guess the number correct number between 0 and 30
        </Discription>
      </div>
      {displayMessage}
      <InputBar setPlayerInput={setPlayerInput} />
      <SubmitBtn
        playerInput={playerInput}
        setDisplaymessage={setDisplaymessage}
      ></SubmitBtn>
      <HintBtn setDisplaymessage={setDisplaymessage}></HintBtn>
    </div>
  );
}

export default App;
