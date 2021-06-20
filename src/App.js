import "./App.css";
import { useState } from "react";

//Data

// components
import InputBar from "./components/InputBar";
import { SubmitBtn, HintBtn } from "./components/SubmitBtn";

function App() {
  const [playerInput, setPlayerInput] = useState(null);
  // const [answred, setAnswred] = useState(null);
  const [displayMessage, setDisplaymessage] = useState("");

  // const DisplayMessgae = () => {
  //   return displayMessage;
  // };

  return (
    <div>
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
