import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {SetCounter} from "./components/SetCounter/SetCounter";
import styled from "styled-components";

export function App() {
  console.log("App render")
  
  const [startValue, setStartValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(1);
  const [currentValue, setCurrentValue] = useState<number>(startValue);
  const [error, setError] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);
  
  useEffect(() => {
    const startValue = localStorage.getItem("startValue");
    if (startValue) {
      setStartValue(JSON.parse(startValue));
      setCurrentValue(JSON.parse(startValue));
    }
    const maxValue = localStorage.getItem("maxValue");
    if (maxValue) setMaxValue(JSON.parse(maxValue));
  }, []);
  
  useEffect(() => {
    // startValue === Math.floor(startValue)
    // || maxValue === Math.floor(startValue)
    // ||
    maxValue > startValue
    && startValue >= 0
      ? setError(false)
      : setError(true);
  }, [startValue, maxValue]);
  
  
  return (
    <AppWrapper>
      <SetCounter startValue={startValue}
                  setStartValue={setStartValue}
                  maxValue={maxValue}
                  setMaxValue={setMaxValue}
                  setCurrentValue={setCurrentValue}
                  error={error}
                  setVisible={setVisible}/>
      <Counter startValue={startValue}
               maxValue={maxValue}
               currentValue={currentValue}
               setCounter={setCurrentValue}
               error={error}
               visible={visible}
               setVisible={setVisible}/>
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