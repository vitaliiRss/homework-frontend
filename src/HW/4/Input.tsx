import { ChangeEvent } from "react";

type InputPropsType = {
  currentText: string
  setCurrentText: (currentText: string) => void
};

export const Input = (props: InputPropsType) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    return props.setCurrentText(event.currentTarget.value)
  };

  return (
    <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
  );
};
