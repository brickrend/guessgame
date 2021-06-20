import { InputBarComp } from "../StylesFolder/Styles";

const InputBar = (props) => {
  return (
    <InputBarComp
      type="number"
      value={props.value}
      onChange={(e) => props.setPlayerInput(e.target.value)}
    />
  );
};

export default InputBar;
