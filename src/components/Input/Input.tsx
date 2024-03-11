import React, {ChangeEvent} from 'react';
import styled from "styled-components";

type InputPropsType = {
  callback: (counter: number) => void
  type: string
  value: number
}

export const Input = (props: InputPropsType) => {
  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.callback(JSON.parse(e.currentTarget.value))
  }
  
  return (
    <StyledInput value={props.value} type={props.type} onChange={onChangeInputHandler}/>
  )
};

const StyledInput = styled.input`
  font-size: 60px;
  width: 150px;
  background-color: #c4faff;
  border: 3px solid #3dd2e5;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
`