import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {SetCounter} from "./components/SetCounter/SetCounter";
import styled from "styled-components";

export function App() {
  console.log("app render")
  
  const [startValue, setStartValue] = useState(0);
  const [maxValue, setMaxValue] = useState(4);
  const [currentValue, setCurrentValue] = useState(startValue);
  const [error, setError] = useState(false)
  
  return (
    <AppWrapper>
      <SetCounter
        startValue={startValue}
        maxValue={maxValue}
        setStartValue={setStartValue}
        setMaxValue={setMaxValue}
        setCurrentValue={setCurrentValue}
        error={error}
        setError={setError}
      />
      <Counter
        startValue={startValue}
        maxValue={maxValue}
        currentValue={currentValue}
        setCounter={setCurrentValue}
        error={error}
      />
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  max-width: 1280px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`

// counter - 2 (счетчик и настройки)
// ---------------------------------------
// блок настроек
// input -  с макс значением
// input -  с мин значением
// переключения в input стрелками
// только положительные числа от 0 и больше
// на отрицательные инпут краснеет
// после нажатия на кнопку set, она disabled
// значения настроек записывабтся в LocalStorage
// ---------------------------------------


// counter - 1 (просто счетчик)
// ---------------------------------------
// кнопка "inc"
// активна с 0 до 4 включительно, на 5 неактивна, 5 предельное значение, предельное значение красное
//
// кнопка "reset"
// на 0 неактивна, активна с 1 до 5 включительно, сбрасывает счетчик до 0
//
// предельное значение красное и шрифт увеличивается в n раз
//
// неактивные кнопки меняют background
//
// при клике (:active) кнопки меняют стили
// ---------------------------------------