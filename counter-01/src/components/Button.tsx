import React from 'react';

type ButtonType = {
  name: string
  callback: () => void
  className: string
  disabled: boolean
}

export const Button = (props: ButtonType) => {
  const onClickHandler = () => {
    props.callback()
  }
  
  return (
    <button
      disabled={props.disabled}
      onClick={onClickHandler}
      className={props.className}
    >
      {props.name}
    </button>
  );
};