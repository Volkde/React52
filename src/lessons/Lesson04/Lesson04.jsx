import "./styles.css";
import Button from "../../components/Button/Button";

function Lesson04() {
  const showMessage = ()=> {
    alert('Func')
  }
  return (
    <div className="lesson04-wrapper">
      <div className="buttons-container">
        {/* Пример 1 - создание функции внутри вызова кнопки (анонимная функция)  */}
        <Button
          name="Button with inner func"
          type="button"
          onClick={() => {
            alert("Func inner");
          }}
             {/* Пример 2 - создание функции вне кнопки и передача названия функции в prop */}
        <Button
        name="Button with outer func"
        type="button"
        onClick={showMessage}
      />
        />
      </div>
    </div>
  );
}
export default Lesson04;