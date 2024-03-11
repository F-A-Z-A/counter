import {Button} from "../Button/Button";
import React, {useState} from "react";
import styled from "styled-components";
import {WrapperCounter} from "../_Styled/WrapperCounter";
import {RowButtons} from "../_Styled/RowButtons";
import {Input} from "../Input/Input";

type SetCounterPropsType = {
  startValueCounter: number
  maxValueCounter: number
  currentValueCounter: number
  setStartValueCounter: (counter: number) => void
  setMaxValueCounter: (counter: number) => void
  setCurrentValueCounter: (counter: number) => void
};
export const SetCounter = (props: SetCounterPropsType) => {
  
  // промежуточный state, для исключения постоянного apprender
  // const [inputStartValue, setInputStartValue] = useState(props.startValueCounter)
  // const [inputMaxValue, setInputMaxValue] = useState(props.maxValueCounter)
  //
  // const set = () => {
  //   props.setStartValueCounter(inputStartValue)
  //   props.setMaxValueCounter(inputMaxValue)
  //   props.setCounter(inputStartValue)
  // };
  
  const set = () => {
    props.setCurrentValueCounter(props.startValueCounter)
  };
  
  console.log("setcounter render")
  return (
    <WrapperCounter>
      <SetCounterBody>
        <InputWrapper className={"textValue"}>
          <InputTitle>max value:</InputTitle>
          <Input
            type="number"
            callback={props.setMaxValueCounter}
            value={props.maxValueCounter}
          />
        </InputWrapper>
        <InputWrapper className={"textValue"}>
          <InputTitle>start value:</InputTitle>
          <Input
            type="number"
            callback={props.setStartValueCounter}
            value={props.startValueCounter}
          />
        </InputWrapper>
      </SetCounterBody>
      <RowButtons>
        <Button
          name={"set"}
          callback={set}
          disabled={false}
        />
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
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`
const InputTitle = styled.span`
  font-size: 36px;
`
