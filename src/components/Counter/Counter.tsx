import {Button} from "../Button/Button";
import React from "react";
import {WrapperCounter} from "../_Styled/WrapperCounter";
import styled from "styled-components";
import {RowButtons} from "../_Styled/RowButtons";

// переезд на ACER

type CounterPropsType = {
  startValue: number
  maxValue: number
  currentValue: number
  setCounter: (counter: number) => void
  error: boolean
  visible: boolean
  setVisible: (visible: boolean) => void
}

export const Counter = (props: CounterPropsType) => {
  console.log("Counter render");
  
  const increment = () => {
    props.setCounter(props.currentValue + 1);
    props.setVisible(true)
  };
  
  const reset = () => {
    props.setCounter(props.startValue);
    props.setVisible(true)
  };
  
  return (
    <WrapperCounter>
      <CounterBody visible={props.visible}
                   maxValue={props.maxValue}
                   currentValue={props.currentValue}>
        {props.currentValue}
      </CounterBody>
      <CounterBody visible={!props.visible}
                   maxValue={props.maxValue}
                   currentValue={props.currentValue}>
        {props.error
          ? <CounterMassage startValue={props.startValue}
                            error={props.error}>
            !!! incorrect value !!!
          </CounterMassage>
          : <CounterMassage startValue={props.startValue}
                            error={props.error}>
            enter values and press "set"
          </CounterMassage>}
      
      </CounterBody>
      <RowButtons>
        <Button name={"inc"}
                callback={increment}
                disabled={props.error
                  || props.currentValue === props.maxValue
                  || !props.visible}/>
        <Button name={"reset"}
                callback={reset}
                disabled={props.error || !props.visible}/>
      </RowButtons>
    </WrapperCounter>
  );
};

type CounterBodyPropsType = {
  maxValue: number
  currentValue: number
  visible: boolean
}
const CounterBody = styled.div<CounterBodyPropsType>`
  min-height: 240px;
  padding: 10px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
  border: 5px solid #3dd2e5;
  border-radius: 15px;
  color: ${props =>
    props.currentValue === props.maxValue ? "#da1212" : "#3dd2e5"};
  font-size: ${props =>
    props.currentValue === props.maxValue ? "120px" : "100px"};
  font-weight: bold;
  text-align: center;
  display: ${props => props.visible ? "flex" : "none"};
`

type CounterMassagePropsType = {
  startValue: number
  error: boolean
}
const CounterMassage = styled.span<CounterMassagePropsType>`
  font-size: 28px;
  color: ${props => props.error ? "#da1212" : "#3dd2e5"};
`