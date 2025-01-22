import "./styles.css";
import Button from "../../components/Button/Button";

function Lesson04() {
  const showMessage = ()=> {
    alert('')
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
        />
      </div>
    </div>
  );
}
export default Lesson04;