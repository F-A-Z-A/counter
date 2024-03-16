import React from 'react';
import styled from "styled-components";

type ButtonType = {
  name: string
  callback: () => void
  disabled: boolean
}

export const Button = (props: ButtonType) => {
  const onClickHandler = () => props.callback();
  
  return (
    <StyledButton disabled={props.disabled}
                  onClick={onClickHandler}>
      {props.name}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 180px;
  height: 60px;
  background-color: ${props => props.disabled ? "#185159" : "#3dd2e5"};

  border-radius: 15px;
  cursor: pointer;

  font-size: 50px;
  font-weight: bold;

  &:active {
    background-color: #29353f;
    color: #3dd2e5;
  }
`