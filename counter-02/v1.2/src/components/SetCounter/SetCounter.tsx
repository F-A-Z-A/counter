import {Button} from "../Button/Button";
import React, {useState} from "react";
import styled from "styled-components";
import {WrapperCounter} from "../_Styled/WrapperCounter";
import {RowButtons} from "../_Styled/RowButtons";
import {Input} from "../Input/Input";

type SetCounterPropsType = {
  startValue: number
  maxValue: number
  setStartValue: (counter: number) => void
  setMaxValue: (counter: number) => void
  setCurrentValue: (counter: number) => void
  error: boolean
  setVisible: (visible: boolean) => void
};

export const SetCounter = (props: SetCounterPropsType) => {
  console.log("SetCounter render");
  
  const [buttonDisable, setButtonDisable] = useState(true);
  
  // props.startValue >= props.maxValue ? props.setError(false) : props.setError(true);
  
  const setValue = () => {
    props.setCurrentValue(props.startValue);
    props.setVisible(true);
    setButtonDisable(true);
  };
  
  const setMaxValue = (counter: number) => {
    props.setMaxValue(counter);
    setButtonDisable(false);
    props.setVisible(false);
  };
  
  const setStartValue = (counter: number) => {
    props.setStartValue(counter);
    setButtonDisable(false);
    props.setVisible(false);
    props.setCurrentValue(counter);
  };
  
  return (
    <WrapperCounter>
      <SetCounterBody>
        <InputWrapper>
          <InputTitle>max value:</InputTitle>
          <Input type="number"
                 callback={setMaxValue}
                 value={props.maxValue}
                 error={props.error}
                 keyTitle={"maxValue"}/>
        </InputWrapper>
        <InputWrapper>
          <InputTitle>start value:</InputTitle>
          <Input type="number"
                 callback={setStartValue}
                 value={props.startValue}
                 error={props.error && props.startValue >= 0}
                 keyTitle={"startValue"}/>
        </InputWrapper>
      </SetCounterBody>
      <RowButtons>
        <Button name={"set"}
                callback={setValue}
                disabled={buttonDisable || !props.error || props.startValue < 0}/>
      </RowButtons>
    </WrapperCounter>
  );
};

const SetCounterBody = styled.div`
  min-height: 240px;
  margin-bottom: 30px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  border: 5px solid #3dd2e5;
  border-radius: 15px;
  color: #3dd2e5;
  font-weight: bold;
  text-align: center;
`
const InputWrapper = styled.div`
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`
const InputTitle = styled.span`
  font-size: 36px;
`
