//
//
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

import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {
  
  const minValueCounter = 0;
  const maxValueCounter = 5;
  
  const [counter, setCounter] = useState(minValueCounter);
  const increment = () => setCounter(counter + 1);
  const reset = () => setCounter(minValueCounter);
  
  const disabledInc = counter === maxValueCounter
  const disabledReset = counter === minValueCounter
  
  return (
    <div className={"parent"}>
      <div className={counter < maxValueCounter ? "counter" : "counter maxValueCounter"}>
        {counter}
      </div>
      <div className={"rowButtons"}>
        <Button
          name={"inc"}
          callback={increment}
          className={counter < maxValueCounter ? "button" : "button buttonNotActive"}
          disabled={disabledInc}
        />
        <Button
          name={"reset"}
          callback={reset}
          className={counter > minValueCounter ? "button" : "button buttonNotActive"}
          disabled={disabledReset}
        />
      </div>
    </div>
  )
}

export default App;