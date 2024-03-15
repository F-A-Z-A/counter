import {Button} from "../Button/Button";
import React, {useState} from "react";
import {WrapperCounter} from "../_Styled/WrapperCounter";
import styled from "styled-components";
import {RowButtons} from "../_Styled/RowButtons";

type CounterPropsType = {
  startValue: number
  maxValue: number
  currentValue: number
  setCounter: (counter: number) => void
  error: boolean
}
export const Counter = (props: CounterPropsType) => {
  const [visible, setVisible] = useState(false)
  
  console.log("counter render")
  const increment = () => props.setCounter(props.currentValue + 1);
  const reset = () => props.setCounter(props.startValue);
  
  // const start = props.startValue
  // const max = props.maxValue
  // const current = props.currentValue
  // const error = props.error
  
  return (
    <WrapperCounter>
      <CounterBody maxValue={props.maxValue} currentValue={props.currentValue}>
        {props.currentValue}
      </CounterBody>
      <CounterBody maxValue={props.maxValue} currentValue={props.currentValue}>
        {props.error && props.startValue >= 0
          ? <CounterMassage startValue={props.startValue} error={props.error}>
            enter values and press "set"
          </CounterMassage>
          : <CounterMassage startValue={props.startValue} error={props.error}>
            !!! incorrect value !!!
          </CounterMassage>}
      </CounterBody>
      <RowButtons>
        <Button
          name={"inc"}
          callback={increment}
          disabled={!props.error || props.currentValue === props.maxValue || props.startValue < 0}
        />
        <Button
          name={"reset"}
          callback={reset}
          disabled={!props.error || props.startValue < 0}
        />
      </RowButtons>
    </WrapperCounter>
  );
};

type CounterBodyPropsType = {
  maxValue: number
  currentValue: number
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
  color: ${props =>
    props.currentValue < props.maxValue ? "#3dd2e5" : "#da1212"};
  font-size: ${props =>
    props.currentValue < props.maxValue ? "100px" : "120px"};
  font-weight: bold;
  text-align: center;
`

type CounterMassagePropsType = {
  startValue: number
  error: boolean
}
const CounterMassage = styled.span<CounterMassagePropsType>`
  font-size: 28px;
  color: ${props => props.error && props.startValue >= 0 ? "#3dd2e5" : "#da1212"};
`