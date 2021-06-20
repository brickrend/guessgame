import { SubmitBtnComp, Message, HintBtnComp } from "../StylesFolder/Styles";
//Data
let randomNumber = Math.round(Math.random() * 30);
let attemptNumber = 3;
console.log(randomNumber);

export const SubmitBtn = (props) => {
  const handelClick = () => {
    console.log("before if");
    if (+props.playerInput === randomNumber) {
      props.setDisplaymessage(() => {
        console.log("clicked");
        return (
          <div>
            <Message>you win</Message>
          </div>
        );
      });
    } else if (+props.playerInput !== randomNumber && attemptNumber > 0) {
      attemptNumber--;
      props.setDisplaymessage(() => {
        console.log("second if");
        return (
          <div>
            <Message>try again</Message>
          </div>
        );
      });
    }
    if (attemptNumber === 0) {
      props.setDisplaymessage(() => {
        return <Message>Hard luck</Message>;
      });
    }
  };
  return <SubmitBtnComp onClick={handelClick}>submit</SubmitBtnComp>;
};

export const HintBtn = (props) => {
  const handelHint = () => {
    if (randomNumber > 15) {
      props.setDisplaymessage(() => {
        return <Message>It is above 15</Message>;
      });
    } else {
      props.setDisplaymessage(() => {
        return <Message>It is below 15</Message>;
      });
    }
  };
  return <HintBtnComp onClick={handelHint}>Hint</HintBtnComp>;
};
