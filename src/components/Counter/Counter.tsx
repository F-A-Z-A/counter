import {Button} from "../Button/Button";
import React from "react";
import {WrapperCounter} from "../_Styled/WrapperCounter";
import styled from "styled-components";
import {RowButtons} from "../_Styled/RowButtons";

type CounterPropsType = {
  startValueCounter: number
  maxValueCounter: number
  currentValueCounter: number
  setCounter: (counter: number) => void
  error: boolean
}
export const Counter = (props: CounterPropsType) => {
  const increment = () => props.setCounter(props.currentValueCounter + 1);
  const reset = () => props.setCounter(props.startValueCounter);
  console.log("counter render")
  return (
    <WrapperCounter>
      <CounterBody
        startValueCounter={props.startValueCounter}
        maxValueCounter={props.maxValueCounter}
        currentValueCounter={props.currentValueCounter}
      >
        {props.currentValueCounter}
      </CounterBody>
      <RowButtons>
        <Button
          name={"inc"}
          callback={increment}
          disabled={!props.error || props.currentValueCounter === props.maxValueCounter}
        />
        <Button
          name={"reset"}
          callback={reset}
          disabled={!props.error || props.startValueCounter < 0}
        />
      </RowButtons>
    </WrapperCounter>
  );
};

type CounterBodyPropsType = {
  startValueCounter: number
  maxValueCounter: number
  currentValueCounter: number
}

const CounterBody = styled.div<CounterBodyPropsType>`
  min-height: 240px;
  padding: 10px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid #3dd2e5;
  border-radius: 15px;
  color: ${props => props.currentValueCounter < props.maxValueCounter ? "#3dd2e5" : "#da1212"};
  font-size: ${props => props.currentValueCounter < props.maxValueCounter ? "100px" : "120px"};
  font-weight: bold;
  text-align: center;
`