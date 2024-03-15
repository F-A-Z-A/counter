import {Button} from "../Button/Button";
import React, {useState} from "react";
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
  const [visible, setVisible] = useState(false)
  
  console.log("counter render")
  const increment = () => props.setCounter(props.currentValueCounter + 1);
  const reset = () => props.setCounter(props.startValueCounter);
  const start = props.startValueCounter
  const max = props.maxValueCounter
  const current = props.currentValueCounter
  const error = props.error
  
  return (
    <WrapperCounter>
      <CounterBody max={max} current={current}>
        {current}
      </CounterBody>
      <CounterBody max={max} current={current}>
        {error && start >= 0
          ? <CounterMassage start={start} error={error}>
            enter values and press "set"
          </CounterMassage>
          : <CounterMassage start={start} error={error}>
            !!! incorrect value !!!
          </CounterMassage>}
      </CounterBody>
      <RowButtons>
        <Button
          name={"inc"}
          callback={increment}
          disabled={!error || current === max || start < 0}
        />
        <Button
          name={"reset"}
          callback={reset}
          disabled={!error || start < 0}
        />
      </RowButtons>
    </WrapperCounter>
  );
};

type CounterBodyPropsType = {
  max: number
  current: number
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
    props.current < props.max ? "#3dd2e5" : "#da1212"};
  font-size: ${props =>
    props.current < props.max ? "100px" : "120px"};
  font-weight: bold;
  text-align: center;

`

type CounterMassagePropsType = {
  start: number
  error: boolean
}
const CounterMassage = styled.span<CounterMassagePropsType>`
  font-size: 28px;
  color: ${props => props.error && props.start >= 0 ? "#3dd2e5" : "#da1212"};
`