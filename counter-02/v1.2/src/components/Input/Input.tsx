import React, {ChangeEvent} from 'react';
import styled from "styled-components";

type InputPropsType = {
  callback: (counter: number) => void
  type: string
  value: number
  error: boolean
  keyTitle: string
}

export const Input = (props: InputPropsType) => {
  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.callback(JSON.parse(e.currentTarget.value));
    localStorage.setItem(props.keyTitle, e.currentTarget.value);
  };
  
  return <StyledInput error={props.error}
                      value={props.value}
                      type={props.type}
                      onChange={onChangeInputHandler}/>
};

type StyledInputPropsType = {
  error: boolean
}
const StyledInput = styled.input<StyledInputPropsType>`
  font-size: 60px;
  width: 150px;
  background-color: ${props => props.error ? "#c4faff" : "#ff6f6f"};
  border: 3px solid #3dd2e5;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
`