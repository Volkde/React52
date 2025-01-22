import Button from "../Button/Button";
import "./styles.css";
//1 шаг - импорт хука useState из react
import { useState } from "react";
function Counter() {
// Шаг 2 - вызываем хук useState и передаём в вызов (в круглые скобки) начальное состояние (initialState)
//при вызове хук useState возвращает массив из двух элементов
// 1-й элемент - значение состояния (актуальное)
// 2-й элемент - функция, которая может изменять значение состояния
// const counterStateAr = useState(2);
// const [counter, setCounter] = counterStateAr;
// console.log(counterStateAr);

//Для упрощения делаем деструктуризацию
const [counter, setCounter] = useState(2);
return (
    <div className="counter-wrapper">
      <div className="button-wrapper">
        <Button name="-" type="button" />
      </div>
      <div className="result-container">{counter}</div>
      <div className="button-wrapper">
        <Button
          name="+"
          type="button"
          onClick={() => {}}
        />
      </div>
    </div>
  );
}
export default Counter;